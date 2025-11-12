import { createConsumer } from "@anycable/web";
// import { createConsumer } from "@rails/actioncable";

export const consumer = createConsumer({ protocol: 'actioncable-v1-ext-json' });