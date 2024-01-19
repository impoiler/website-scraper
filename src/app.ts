import express, {Request, Response} from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import og from 'open-graph-scraper'
import {url} from 'inspector'

export const app = express()

app.use(bodyParser.json())
app.use(cors())

app.get('/', (_req: Request, res: Response) => {
	res.json({running: true})
})

app.get('/og', async (req: Request, res: Response) => {
	if (!req.query.url) {
		return res.status(400).json({
			error: true,
			message: 'Provide Valid url query parameter',
		})
	}

	try {
		const resss = await fetch(req.query.url as string)
		const jht = await resss.text()

		const head = jht.split('<head>')[1].split('</head>')[0]

		res.status(400).json({
			error: false,
			title: head?.split('<title>')[1]?.split('</title>')[0],
			metas: Object.assign(
				{},
				...Arrer(head?.split('<meta ').map((v) => v?.split('/>')[0]) as any)
			),
		})
	} catch (error) {
		console.log(error)
		res.status(400).json({
			error: true,
		})
	}
})

app.use((req: Request, res: Response) => {
	res.status(400).json({
		error: true,
		message: 'Provide Valid url query parameter',
	})
})

function Arrer(a: []) {
	let dta: {[x: string]: string}[] = []

	a.map((e: string) => {
		const obj = {
			[e.replaceAll('"', '').split('=')[1]?.replace(' content', '')]: e
				.replaceAll('"', '')
				.split('=')[2],
		}
		dta.push(obj)
	})

	return dta.filter((obj) => !Object.values(obj).every((value) => value === undefined))
}
