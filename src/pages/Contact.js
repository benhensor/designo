import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { Helmet, HelmetProvider } from "react-helmet-async"
import styled from "styled-components"
import ModalAlert from "../components/ModalAlert"
import ContactPattern from "../assets/contact/desktop/bg-pattern-hero-desktop.svg"
import LocationSelect from "../components/LocationSelect"
import Leaf from "../assets/shared/desktop/bg-pattern-leaf.svg"
import {ReactComponent as Error } from "../assets/contact/desktop/icon-error.svg"

const ContactContainer = styled.main`
	max-width: 1111px;
	margin: 125px auto 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (max-width: 1199px) {
		margin: 125px 5% 0 5%;
	}
	@media (max-width: 768px) {
		margin: 125px 0 0 0;
	}
	@media (max-width: 375px) {
		margin: 95px 0 0 0;
	}
`

const ContactBackground = styled.div`
	z-index: -1;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 810px;
	height: 100vh;
	width: 100%;
	margin: 250px 0;
	div {
		display: flex;
		width: 100%;
	}
	div:nth-child(2) {
		justify-content: flex-start;
		transform: rotate(180deg);
	}
	img {
		width: 1000px;
		height: auto;
	}

	@media screen and (max-width: 768px) {
		display: none;
	}
`

const ContactHero = styled.div`
	background: url(${ContactPattern});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	background-color: ${(props) => props.theme.primaryColors.peach};
	color: ${(props) => props.theme.primaryColors.white};
	display: flex;
	border-radius: 15px;
	padding: 70px 5%;
	gap: 40px;
	margin-bottom: 160px;

	@media (max-width: 809px) {
		flex-direction: column;
	}

	@media (max-width: 768px) {
		flex-direction: column;
		margin: 0 5%;
		margin-bottom: 80px;
	}

	@media (max-width: 375px) {
		margin: 0;
		border-radius: 0;
	}
`

const Info = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 40px;
	flex: 1;

	@media (max-width: 546px) {
		align-items: center;
		text-align: center;
	}
`

const ContactForm = styled.form`
	display: flex;
	flex: 1;
	flex-direction: column;
	label {
		border: 0;
		clip: rect(0 0 0 0);
		height: auto;
		margin: 0;
		overflow: hidden;
		padding: 0;
		position: absolute;
		width: 1px;
		white-space: nowrap;
	}
	input,
	textarea {
		width: 100%;
		padding: 18px 24px;
		border: none;
		font-size: 1.5rem;
		background: transparent;
		border-bottom: 1px solid ${(props) => props.theme.primaryColors.white};
		color: ${(props) => props.theme.primaryColors.white};
		&:focus {
			outline: none;
			box-shadow: 0 2px ${(props) => props.theme.primaryColors.white};
		}
	}
	input::placeholder,
		textarea::placeholder {
			color: ${(props) => props.theme.primaryColors.white};
			opacity: 0.6;
		}
	div {
		display: flex;
		justify-content: flex-end;

		@media (max-width: 546px) {
			justify-content: center;
		}
	}
`

const InputWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
	position: relative;
`

const ErrorMessage = styled.p`
	display: flex;
	align-items: center;
    color: ${(props) => props.theme.secondaryColors.lightGrey};
	font-style: italic;
    margin: 0;
    font-size: 1rem;
	position: absolute;
	right: 0;
	
`

const Button = styled.button`
	background-color: ${(props) => props.theme.secondaryColors.lightGrey};
	color: ${(props) => props.theme.primaryColors.black};
	padding: 18px 24px;
	width: 150px;
	cursor: pointer;
	border-radius: 8px;
	border: none;
	font-size: 1.5rem;
	text-transform: uppercase;
	transition: all 0.1s ease;
	margin-top: 40px;
	&:hover {
		background-color: ${(props) => props.theme.secondaryColors.lightPeach};
		color: ${(props) => props.theme.primaryColors.white};
	}
`

export default function Contact() {

    const [showModal, setShowModal] = useState(false)

    const handleOpenModal = () => setShowModal(true)	
    const handleCloseModal = () => setShowModal(false)

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const handleRegistration = (data) => {
		console.log(data)
		reset()
		handleOpenModal()
	}
	const handleError = (errors) => {}

	let errorMsg = "Can't be empty"

	const registerOptions = {
		name: { required: `${errorMsg}` },
		email: { required: `${errorMsg}` },
		phone: { required: `${errorMsg}` },
		message: { required: `${errorMsg}` },
	};

	return (
		<HelmetProvider>
			<Helmet>
                <title>Designo | Contact</title>
                <meta name="author" content="Ben Hensor"/>
                <meta name="description" 
				content="Contact page for Designo - Where we bring ideas to life!"
                />
            </Helmet>
			<ContactContainer>
				<ContactBackground>
					<div>
						<img src={Leaf} alt="leaf pattern" />
					</div>
					<div>
						<img src={Leaf} alt="leaf pattern" />
					</div>
				</ContactBackground>
				<ContactHero>
					<Info>
						<h1>Contact Us</h1>
						<p>
							Ready to take it to the next level? Let’s talk about
							your project or idea and find out how we can help your
							business grow. If you are looking for unique digital
							experiences that’s relatable to your users, drop us a
							line.
						</p>
					</Info>
					<ContactForm
						action="#"
						onSubmit={handleSubmit(handleRegistration, handleError)}
					>
						<InputWrapper>
							<label htmlFor="name">Name</label>
							<input
								type="text"
								name="name"
								id="name"
								placeholder="Name"
								aria-invalid={errors.name ? 'true' : 'false'}
								{...register('name', registerOptions.name)}
							/>
							{errors.name && <ErrorMessage role="alert">{errors.name.message}<Error style={{ marginLeft: '8px' }}/></ErrorMessage>}
						</InputWrapper>
						<InputWrapper>
							<label htmlFor="email">Email</label>
							<input
								type="email"
								name="email"
								id="email"
								placeholder="Email Address"
								aria-invalid={errors.email ? 'true' : 'false'}
								{...register('email', registerOptions.email)}
							/>
							{errors.email && <ErrorMessage role="alert">{errors.email.message}<Error style={{ marginLeft: '8px' }}/></ErrorMessage>}
						</InputWrapper>
						<InputWrapper>
							<label htmlFor="phone">Phone Number</label>
							<input
								type="tel"
								name="phone"
								id="phone"
								placeholder="Phone"
								aria-invalid={errors.phone ? 'true' : 'false'}
								{...register('phone', registerOptions.phone)}
							/>
							{errors.phone && <ErrorMessage role="alert">{errors.phone.message}<Error style={{ marginLeft: '8px' }}/></ErrorMessage>}
						</InputWrapper>
						<InputWrapper>	
							<label htmlFor="message">Message</label>
							<textarea
								name="message"
								id="message"
								cols="10"
								rows="5"
								placeholder="Your Message"
								aria-invalid={errors.message ? 'true' : 'false'}
								{...register('message', registerOptions.message)}
							/>
							{errors.message && <ErrorMessage role="alert">{errors.message.message}<Error style={{ marginLeft: '8px' }}/></ErrorMessage>}
						</InputWrapper>
						<div>
							<Button
								type="submit"
								aria-label="Submit"
								Submit
							>
								Submit
							</Button>
						</div>
						
					</ContactForm>
				</ContactHero>

				<ModalAlert show={showModal} onCLose={handleCloseModal}>
					<h2>Thanks for viewing!</h2>
					<p>Thanks for viewing my solution! I hope you enjoyed it.</p>
					<p>If you'd like to get in touch, please visit my 
					<a href="https://benhensordev.netlify.app/#connect" target="__blank" rel="noopener noreferrer"
					style={{ color: '#E7816B', textDecoration: 'none' }}
					> <strong>WEBSITE</strong></a>.
					</p>
					<Button onClick={handleCloseModal} style={{ width: '200px'}}>Close</Button>
				</ModalAlert>

				<LocationSelect />
			</ContactContainer>
		</HelmetProvider>
	)
}
