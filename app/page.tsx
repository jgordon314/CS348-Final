"use client";
import "./temp.css";
import { useSession, signIn } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
	const { data: session } = useSession();

	if (session) {
		redirect("/character_list");
	}
	return (
		<>
			Not signed in <br />
			<button onClick={() => signIn()}>Sign in</button>
		</>
	);
}
