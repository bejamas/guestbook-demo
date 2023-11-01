import Image from 'next/image'
// import { auth } from 'lib/auth'
import { SignIn, SignOut } from './buttons'
import { Suspense } from 'react'
import Form from './form'

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
				<p className='fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
					Giridhar&apos;s Guestbook
				</p>
			</div>

			<div className='relative place-items-center z-[-1]'>
				<h1 className='relative font-semibold dark:drop-shadow-[0_0_0.3rem_#ffffff70] text-2xl mb-8 tracking-tighter'>
					Sign my guestbook
				</h1>
				<Suspense>
					<GuestbookForm />
					<GuestbookEntries />
				</Suspense>
			</div>

			<div className='mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left'></div>
		</main>
	)
}

async function GuestbookForm() {
	// const session = await auth()
	const session = false

	return session ? (
		<>
			<Form />
			<SignOut />
		</>
	) : (
		<SignIn />
	)
}

async function GuestbookEntries() {
	const entries = [
		{
			id: 1,
			created_by: 'Giridhar',
			body: 'Hey!',
		},
		{
			id: 2,
			created_by: 'Alice',
			body: 'Sup?',
		},
		{
			id: 3,
			created_by: 'Bob',
			body: "What's up?",
		},
		{
			id: 4,
			created_by: 'Carol',
			body: "Not much, just bummin'",
		},
		{
			id: 5,
			created_by: 'David',
			body: 'Same here...',
		},
		{
			id: 6,
			created_by: 'Eve',
			body: "So, what's new?",
		},
		{
			id: 7,
			created_by: 'Frank',
			body: 'Not much really. Just the usual.',
		},
		{
			id: 8,
			created_by: 'Grace',
			body: 'Yeah, I feel you.',
		},
		{
			id: 9,
			created_by: 'Henry',
			body: 'So, what are you up to today?',
		},
		{
			id: 10,
			created_by: 'Isabella',
			body: "Not sure yet. Maybe I'll just chill out and watch some TV.",
		},
		{
			id: 11,
			created_by: 'Jack',
			body: 'Sounds good. I might do the same.',
		},
		{
			id: 12,
			created_by: 'Kim',
			body: 'So, what shows are you watching these days?',
		},
		{
			id: 13,
			created_by: 'Laura',
			body: "I'm really into Stranger Things right now. Have you seen it?",
		},
		{
			id: 14,
			created_by: 'Michael',
			body: "Yeah! It's so good! I'm eagerly waiting for the next season.",
		},
		{
			id: 15,
			created_by: 'Nicole',
			body: 'Me too!',
		},
		{
			id: 16,
			created_by: 'Oliver',
			body: 'So, what else are you up to?',
		},
		{
			id: 17,
			created_by: 'Patricia',
			body: 'Not much else. Just trying to survive this heat wave.',
		},
		{
			id: 18,
			created_by: 'Quentin',
			body: "Ugh, I know! It's been brutal.",
		},
		{
			id: 19,
			created_by: 'Rachel',
			body: "I'm just hoping for a cold front to come through soon.",
		},
		{
			id: 20,
			created_by: 'Samuel',
			body: 'Me too. My AC is starting to give up on me.',
		},
		{
			id: 21,
			created_by: 'Taylor',
			body: "That sucks. I hope you don't have to go without AC for too long.",
		},
		{
			id: 22,
			created_by: 'William',
			body: "Me too. I'm not sure how I would survive without it.",
		},
		{
			id: 23,
			created_by: 'Xander',
			body: "Well, I guess I'll let you go. I have to go do some laundry.",
		},
		{
			id: 24,
			created_by: 'Yvonne',
			body: "Same here. I've got a big pile of clothes to get through.",
		},
	]

	return entries.map((entry) => (
		<div key={entry.id} className='flex flex-col space-y-1 mb-4'>
			<div className='w-full text-sm break-words'>
				<span className='text-neutral-600 dark:text-neutral-400 mr-1'>
					{entry.created_by}:
				</span>
				{entry.body}
			</div>
		</div>
	))
}
