import { collection, getDocs } from "firebase/firestore";
import { firestore } from "./firebase";

export async function fetchTestimonials() {
  try {
    const querySnapshot = await getDocs(collection(firestore, "testimonials"));
    const testimonials = [];

    querySnapshot.forEach((doc) => {
      testimonials.push({ id: doc.id, data: doc.data() });
    });

    return testimonials;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    throw error;
  }
}

export async function fetchMessages() {
  try {
    const querySnapshot = await getDocs(collection(firestore, "messages"));
    const messages = [];

    querySnapshot.forEach((doc) => {
      messages.push({ id: doc.id, data: doc.data() });
    });

    return messages;
  } catch (error) {
    console.error("Error fetching messages:", error);
    throw error;
  }
}

export async function fetchBlogPosts() {
  try {
    const querySnapshot = await getDocs(collection(firestore, "blog"));
    const blogPosts = [];

    querySnapshot.forEach((doc) => {
      blogPosts.push({ id: doc.id, data: doc.data() });
    });

    return blogPosts;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    throw error;
  }
}

export const displayDateOrTime = (timestamp) => {
  const toDateTime = (timestamp) => {
    const milliseconds =
      timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000;

    const jsDate = new Date(milliseconds);

    return jsDate;
  };

  const currentDateTime = new Date();
  const inputDate = toDateTime(timestamp);

  if (
    currentDateTime.getFullYear() === inputDate.getFullYear() &&
    currentDateTime.getMonth() === inputDate.getMonth() &&
    currentDateTime.getDate() === inputDate.getDate()
  ) {
    const hours = inputDate.getHours().toString().padStart(2, "0");
    const minutes = inputDate.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  } else {
    const day = inputDate.getDate().toString().padStart(2, "0");
    const month = inputDate.getMonth().toString().padStart(2, "0");
    const year = inputDate.getFullYear().toString();
    return `${day}/${month}/${year}`;
  }
};