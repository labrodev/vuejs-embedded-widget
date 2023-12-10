<template>
    <div class="text-center mt-2" :style="{ color: textColor }">
        
        <div v-if="countdownDateIsInvalid === true">
            :date property is invalid. Should be dateString in correct format.
        </div>

        <!-- Display a message when the countdown has expired -->
        <div v-if="countdownExpired && end !== null" class="text-2xl">
            <p>{{ end }}</p>
        </div>
        <!-- Display the countdown when it's still active -->
        <div v-else>
            <p class="text-4xl font-bold">
                {{ title }}
            </p>
            <!-- Display the countdown in days, hours, minutes, and seconds -->
            <p class="text-3xl font-bold mt-2">
                <span>{{ countdown.days }} days </span>
                <span>{{ countdown.hours }} hours </span>
                <span>{{ countdown.minutes }} minutes </span>
                <span>{{ countdown.seconds }} seconds </span>
            </p>
        </div>
    </div>
</template>

<script setup>
    // Import required functions from Vue
    import { ref, defineProps } from 'vue';

    // Define props for the component
    const props = defineProps({
        date: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        end: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        }
    });

    // Calculate the timestamp for the countdown end date
    const countdownDate = ref(new Date(props.date).getTime());

    const countdownDateIsInvalid = isNaN(countdownDate.value);

    // Initialize the countdown values
    const countdown = ref({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    // Track whether the countdown has expired
    const countdownExpired = ref(false);

    // Determine the text color based on the provided prop or default to black
    const textColor = props.color || 'black';

    // Update the countdown values every second
    // setInterval schedules repeated execution every delayed value (1000 ms = 1 second)
    setInterval(() => {
        // Get the current timestamp
        const now = new Date().getTime();

        // Calculate the remaining time in milliseconds
        const distance = countdownDate.value - now;

        // Check if the countdown has expired
        if (distance <= 0) {
            countdownExpired.value = true;
            return;
        }

        // Calculate days, hours, minutes, and seconds
        countdown.value.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        countdown.value.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        countdown.value.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        countdown.value.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }, 1000);

</script>
