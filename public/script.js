function searchCep() {
	let cep = document.getElementById("cep").value
	if(cep != '') {
		let url = `https://brasilapi.com.br/api/cep/v1/${cep}`

		let req = new XMLHttpRequest()
		req.open("GET", url)
		req.send()

		req.onload = function() {
			if (req.status === 200) {
				let address = JSON.parse(req.response)
				document.getElementById("address").value = address.street
			} else if (req.status === 404) {
				alert("CEP not found")
			} else {
				alert("Request Failed")
			}
		}
	}
}
window.onload = function() {
	cep.addEventListener("blur", searchCep)
}
