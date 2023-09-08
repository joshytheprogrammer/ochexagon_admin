import Link from "next/link";

const NotSignedIn = () => {
  return (
    <div>
      You are not yet signed in!{" "}
      <Link href="/" className="text-primary-color underline">
        Go to login page
      </Link>
    </div>
  );
};

export default NotSignedIn;
