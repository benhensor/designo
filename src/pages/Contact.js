import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import ModalAlert from "../components/ModalAlert";
import ContactPattern from "../assets/contact/desktop/bg-pattern-hero-desktop.svg";
import LocationSelect from "../components/LocationSelect";
import Leaf from "../assets/shared/desktop/bg-pattern-leaf.svg";

const ContactContainer = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;

	@media (max-width: 768px) {
		margin: 0 5%;
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
`;

const ContactHero = styled.div`
	background: url(${ContactPattern});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	background-color: ${(props) => props.theme.primaryColors.peach};
	color: ${(props) => props.theme.primaryColors.white};
	display: flex;
	border-radius: 15px;
	padding: 7%;
	gap: 40px;
	margin-bottom: 160px;
`;

const Info = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 40px;
	flex: 1;
`;

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
		input::placeholder,
		textarea::placeholder {
			color: ${(props) => props.theme.primaryColors.white};
			opacity: 0.6;
		}
	}
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
	margin-top: 24px;
	&:hover {
		background-color: ${(props) => props.theme.secondaryColors.lightPeach};
		color: ${(props) => props.theme.primaryColors.white};
	}
`;

export default function Contact() {

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const handleRegistration = (data) => console.log(data);
	const handleError = (errors) => {};

	let errorMsg = "Can't be empty";

	const registerOptions = {
		name: { required: `${errorMsg}` },
		email: { required: `${errorMsg}` },
		phone: { required: `${errorMsg}` },
		message: { required: `${errorMsg}` },
	};

	return (
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
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						id="name"
						placeholder="Name"
                        aria-invalid={errors.name ? 'true' : 'false'}
						{...register('name', registerOptions.name)}
					/>
                    {errors.name && <p role="alert">{errors.name.message}</p>}
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Email Address"
                        aria-invalid={errors.email ? 'true' : 'false'}
                        {...register('email', registerOptions.email)}
					/>
                    {errors.email && <p role="alert">{errors.email.message}</p>}
					<label htmlFor="phone">Phone Number</label>
					<input
						type="tel"
						name="phone"
						id="phone"
						placeholder="Phone"
                        aria-invalid={errors.phone ? 'true' : 'false'}
                        {...register('phone', registerOptions.phone)}
					/>
                    {errors.phone && <p role="alert">{errors.phone.message}</p>}
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
                    {errors.message && <p role="alert">{errors.message.message}</p>}
					<Button 
                        type="submit"
                        aria-label="Submit"
                        onClick={handleOpenModal}>
                        Submit
                    </Button>
				</ContactForm>
			</ContactHero>

            <ModalAlert show={showModal} onCLose={handleCloseModal}>
                <h2>Thanks for viewing!</h2>
                <p>Thanks for viewing my solution! I hope you enjoyed it.</p>
                <p>If you'd like to get in touch, please visit my 
                   <a href="https://benhensordev.netlify.app/#connect"> WEBSITE</a>.
                </p>
                <Button onClick={handleCloseModal} style={{ width: '200px'}}>Back to Portfolio</Button>
            </ModalAlert>

			<LocationSelect />
		</ContactContainer>
	);
}
