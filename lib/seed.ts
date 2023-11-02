import { sql } from '@vercel/postgres'

const data = [
	{
		email: 'user1@gmail.com',
		created_by: 'Giridhar',
		body: 'Hey!',
		last_modified: new Date().toISOString(),
	},
	{
		email: 'user2@gmail.com',
		created_by: 'Alice',
		body: 'Sup?',
		last_modified: new Date().toISOString(),
	},
	{
		email: 'user3@gmail.com',
		created_by: 'Bob',
		body: "What's up?",
		last_modified: new Date().toISOString(),
	},
	{
		email: 'user4@gmail.com',
		created_by: 'Carol',
		body: "Not much, just bummin'",
		last_modified: new Date().toISOString(),
	},
	{
		email: 'user5@gmail.com',
		created_by: 'David',
		body: 'Same here...',
		last_modified: new Date().toISOString(),
	},
	{
		email: 'user6@gmail.com',
		created_by: 'Eve',
		body: "So, what's new?",
		last_modified: new Date().toISOString(),
	},
	{
		email: 'user7@gmail.com',
		created_by: 'Frank',
		body: 'Not much really. Just the usual.',
		last_modified: new Date().toISOString(),
	},
	{
		email: 'user8@gmail.com',
		created_by: 'Grace',
		body: 'Yeah, I feel you.',
		last_modified: new Date().toISOString(),
	},
	{
		email: 'user9@gmail.com',
		created_by: 'Henry',
		body: 'So, what are you up to today?',
		last_modified: new Date().toISOString(),
	},
	{
		email: 'user10@gmail.com',
		created_by: 'Isabella',
		body: "Not sure yet. Maybe I'll just chill out and watch some TV.",
		last_modified: new Date().toISOString(),
	},
	{
		email: 'user11@gmail.com',
		created_by: 'Jack',
		body: 'Sounds good. I might do the same.',
		last_modified: new Date().toISOString(),
	},
	{
		email: 'user12@gmail.com',
		created_by: 'Kim',
		body: 'So, what shows are you watching these days?',
		last_modified: new Date().toISOString(),
	},
	{
		email: 'user13@gmail.com',
		created_by: 'Laura',
		body: "I'm really into Stranger Things right now. Have you seen it?",
		last_modified: new Date().toISOString(),
	},
	{
		email: 'user14@gmail.com',
		created_by: 'Michael',
		body: "Yeah! It's so good! I'm eagerly waiting for the next season.",
		last_modified: new Date().toISOString(),
	},
	{
		email: 'user15@gmail.com',
		created_by: 'Nicole',
		body: 'Me too!',
		last_modified: new Date().toISOString(),
	},
	{
		email: 'user16@gmail.com',
		created_by: 'Oliver',
		body: 'So, what else are you up to?',
		last_modified: new Date().toISOString(),
	},
	{
		email: 'user17@gmail.com',
		created_by: 'Patricia',
		body: 'Not much else. Just trying to survive this heat wave.',
		last_modified: new Date().toISOString(),
	},
	{
		email: 'user18@gmail.com',
		created_by: 'Quentin',
		body: "Ugh, I know! It's been brutal.",
		last_modified: new Date().toISOString(),
	},
	{
		email: 'user19@gmail.com',
		created_by: 'Rachel',
		body: "I'm just hoping for a cold front to come through soon.",
		last_modified: new Date().toISOString(),
	},
	{
		email: 'user20@gmail.com',
		created_by: 'Samuel',
		body: 'Me too. My AC is starting to give up on me.',
		last_modified: new Date().toISOString(),
	},
	{
		email: 'user21@gmail.com',
		created_by: 'Taylor',
		body: "That sucks. I hope you don't have to go without AC for too long.",
		last_modified: new Date().toISOString(),
	},
	{
		email: 'user22@gmail.com',
		created_by: 'William',
		body: "Me too. I'm not sure how I would survive without it.",
		last_modified: new Date().toISOString(),
	},
	{
		email: 'user23@gmail.com',
		created_by: 'Xander',
		body: "Well, I guess I'll let you go. I have to go do some laundry.",
		last_modified: new Date().toISOString(),
	},
	{
		email: 'user24@gmail.com',
		created_by: 'Yvonne',
		body: "Same here. I've got a big pile of clothes to get through.",
		last_modified: new Date().toISOString(),
	},
]

export const addData = async () => {
	console.log('seeding...')
	await data.map(async (i) => {
		await sql`INSERT INTO "Guestbook" (email, created_by, body, last_modified) VALUES (${i.email}, ${i.created_by}, ${i.body}, ${i.last_modified});`
	})
	console.log('seeding complete')
}
