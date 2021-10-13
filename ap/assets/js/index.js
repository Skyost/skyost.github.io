const places = [
	'Le premier cadeau est caché dans la partie haute du casier blanc.',
	'Le second cadeau est sous le lit, de mon côté. Plutôt proche des oreillers.',
	'Tu pourras trouver le cadeau d\'aujourd\'hui derrière le casier à bouteilles.',
	'Le cadeau du jour se trouve dans ma table de nuit, dans le tiroir du bas.',
	'Ce cadeau-ci se situe dans mon gros sac noir, en haut de l\'armoir.',
	'L\'avant-dernier cadeau est dans la table noire, sur ta droite.',
	'Le dernier cadeau est dans la sacoche d\'ordinateur, sous la télé de la chambre.'
]

const today = new Date()
const calendar = document.getElementById('calendar')

for (let i = 0; i < places.length; i++) {
	const entry = document.createElement('div')
	entry.classList.add('entry')
	entry.innerHTML = `<img src="assets/img/${i+1}.svg">`

	const entryContainer = document.createElement('div')
	entryContainer.classList.add('col-lg-3')
	entryContainer.classList.add('col-md-4')
	entryContainer.classList.add('col-sm-12')
	entryContainer.appendChild(entry)
	
	calendar.appendChild(entryContainer)
	const date = new Date(2021, 9, 19 - (places.length - (i + 1)))
	const distance = (date - today) / (1000 * 60 * 60 * 24)
	
	const dateString = date.toLocaleDateString('fr-FR')
	entry.setAttribute('title', dateString)
	if (distance <= 0) {
		entry.onclick = function () {
			document.getElementById('entry-modal-title').innerHTML = `Cadeau du ${dateString}`
			document.getElementById('entry-modal-message').innerHTML = places[i]
			const modal = new bootstrap.Modal(document.getElementById('entry-modal'), {})
			modal.show()
		}
		entry.classList.add('enabled')
	}
}