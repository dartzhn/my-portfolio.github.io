let nows = document.getElementsByClassName("now")
let sides = document.getElementsByClassName("carousel__sides-img")
sides[0].addEventListener("click", change)
sides[1].addEventListener("click", change)
sides[2].addEventListener("click", change)
sides[3].addEventListener("click", change)

function change() {
	let active = document.getElementsByClassName("active")[0]
	let border = document.getElementsByClassName("border")[0]
	for (let now of nows) {
		if (now.getAttribute("num") == this.getAttribute("num")) {
			active.classList.remove("active")
			active.classList.add("passive")

			border.classList.remove("border")
			border.classList.add("border-none")

			now.classList.remove("passive")
			now.classList.add("active")

			this.classList.remove("border-none")
			this.classList.add("border")
		}
	}
}

/*модальное окно начало*/
let projectButtons = document.getElementsByClassName("project__button")
projectButtons[0].setAttribute("onclick", "orderProject.open()")
projectButtons[1].setAttribute("onclick", "askQuestion.open()")

function _createModal(options) {
	const modal = document.createElement('div')
	modal.classList.add('modal')
	if (options === 'заказать проект') {
		modal.insertAdjacentHTML('afterbegin', `
			<div class="modal">
				<div class="modal__overlay">
					<div class="modal__window">
						<div class="modal__header">
							<span class="modal__title">Заказать проект</span>
							<span id="modal__close" onclick="orderProject.close()">&times;</span> <!--&times; = x -->
						</div>
						<div class="modal__body">
							<p>
								Вы можете связаться с нами, позвонив по телефону, написав в Instagram, в Whatsapp или на почту. 
								Потготовив проект, мы вышлем его в виде ответа на ваше письмо. Обязательно укажите имя проекта 
							</p>
						</div>
						<div class="modal__footer">
						    <div id="modal__button" onclick="orderProject.ok()">
						        <p>Ok</p>
						    </div>
						</div>
					</div>
				</div>
			</div>`)
	} else if (options === 'задать вопрос') {
		modal.insertAdjacentHTML('afterbegin', `
			<div class="modal">
				<div class="modal__overlay">
					<div class="modal__window">
						<div class="modal__header">
							<span class="modal__title">Задать вопрос</span>
							<span id="modal__close" onclick="askQuestion.close()">&times;</span> <!--&times; = x -->
						</div>
						<div class="modal__body">
							<p>
								Интересующие вас вопросы вы можете задать в Instagram и Whatsapp
							</p>
						</div>
						<div class="modal__footer">
						    <div id="modal__button" onclick="askQuestion.ok()">
						        <p>Ok</p>
						    </div>
						</div>
					</div>
				</div>
			</div>`)
	}
	document.body.appendChild(modal)
	return modal
}

function modal(options) {
	const $modal = _createModal(options)
	const animationSpeed = 200
	let closing = false
	return {
		open() {
			if (!closing) {
				$modal.classList.add('open')
			}
		},
		close () {
			closing = true
			$modal.classList.remove('open')
			$modal.classList.add('hide')
			setTimeout(() => {
				$modal.classList.remove('hide')
			}, animationSpeed)
			closing = false
		},
		ok() {
			closing = true
			$modal.classList.remove('open')
			$modal.classList.add('hide')
			/*something else*/
			setTimeout(() => {
				$modal.classList.remove('hide')
			}, animationSpeed)
			closing = false
		}
	}
}

const orderProject = modal('заказать проект')
const askQuestion = modal('задать вопрос')
/*модальное окно конец*/