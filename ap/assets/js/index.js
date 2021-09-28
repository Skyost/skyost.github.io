const places = [
	'Support téléphone',
	'Coque Rhinoshield Hello Kitty',
	'Pop Raiponce',
	'Montre connectée',
	'Les favoris de Tini',
	'Portes clés',
	'Arrière Pac-Man'
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