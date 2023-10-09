import React from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'

function TermsCondition() {
  return (
   	<>
   		<NavBar />
    		<div className="parent-size py-10 sm:space-y-10 space-y-5">
					<section className="space-y-2">
						<h2 className="text-2xl font-semibold">Terms and Conditions (T&C) for the CR8 Hackathon Taraba 2023</h2>
						<p className="">Please carefully read and understand the following terms and conditions before participating in the CR8 Taraba Hackathon 2023. Your participation in the Hackathon signifies your agreement to adhere to these terms and conditions.</p>
					</section>
					<section className="space-y-10">
						<ol className="">
							<li className="font-semibold">Eligibility:</li>
							<ul className="list-disc px-10 space-y-3 sm:space-y-2">
								<li className="">Participants must be at least 18 years old or the legal age of majority in their jurisdiction to participate in the Hackathon.</li>
								<li className="">Participants must complete the registration process provided by the organizers at <a href="/registrationType" className="text-[#3fff00]">Register</a>.</li>
								<li className="">Teams may participate, with each team member meeting the eligibility criteria.</li>
								<li className="">Organizers, sponsors, and judges of the Hackathon, as well as their immediate family members, are not eligible to participate.</li>
							</ul>
						</ol>

						<ol className="">
							<li className="font-semibold">Registration:</li>
							<ul className="list-disc px-10 space-y-3 sm:space-y-2">
								<li className="">Registration for the Hackathon is entirely free.</li>
								<li className="">Participants must provide accurate and current information during the registration process.</li>
								<li className="">Any deliberate misinformation or misrepresentation may result in disqualification.</li>
							</ul>
						</ol>

						<ol className="">
							<li className="font-semibold">Hackathon Rules:</li>
							<ul className="list-disc px-10 space-y-3 sm:space-y-2">
								<li className="">All projects submitted must be original creations developed solely during the Hackathon.</li>
								<li className="">Participants must respect the intellectual property rights of others.</li>
								<li className="">Plagiarism or any form of cheating will lead to immediate disqualification.</li>
								<li className="">Teams must consist of no more than 7 members.</li>
								<li className="">All code, documentation, and materials developed during the Hackathon must be made open source and publicly accessible.</li>
								<li className="">Participants are expected to adhere to ethical guidelines and refrain from any harmful, offensive, or illegal activities.</li>
							</ul>
						</ol>

						<ol className="">
							<li className="font-semibold">Judging and Prizes:</li>
							<ul className="list-disc px-10 space-y-3 sm:space-y-2">
								<li className="">Projects will be evaluated based on criteria provided by the organizers.</li>
								<li className="">The decisions of the judges are considered final and binding.</li>
								<li className="">Prizes will be awarded to winning teams or individuals according to the criteria specified by the organizers.</li>
							</ul>
						</ol>

						<ol className="">
							<li className="font-semibold">Code of Conduct:</li>
							<ul className="list-disc px-10 space-y-3 sm:space-y-2">
								<li className="">Participants are required to conduct themselves in a professional, respectful, and inclusive manner.</li>
								<li className="">Harassment, discrimination, or any form of abusive behavior will not be tolerated.</li>
								<li className="">Participants who violate the code of conduct may face disqualification from the Hackathon.</li>
							</ul>
						</ol>

						<ol className="">
							<li className="font-semibold">Liability:</li>
							<ul className="list-disc px-10 space-y-3 sm:space-y-2">
								<li className="">Participants are personally responsible for their own actions during the Hackathon.</li>
								<li className="">Organizers and sponsors are not liable for any loss, injury, or damage that may occur during the Hackathon event.</li>
							</ul>
						</ol>

						<ol className="">
							<li className="font-semibold">Data and Privacy:</li>
							<ul className="list-disc px-10 space-y-3 sm:space-y-2">
								<li className=""> Participants may be required to provide personal information as part of the registration process.</li>
								<li className="">Participants acknowledge that their project submissions may be shared with judges and sponsors for evaluation purposes.</li>
							</ul>
						</ol>

						<ol className="">
							<li className="font-semibold">Amendments:</li>
							<ul className="list-disc px-10 space-y-3 sm:space-y-2">
								<li className="">The organizers reserve the right to modify these terms and conditions at any time.</li>
								<li className="">Participants will be promptly notified of any changes.</li>
							</ul>
						</ol>

						<ol className="">
							<li className="font-semibold">Termination:</li>
							<ul className="list-disc px-10 space-y-3 sm:space-y-2">
								<li className="">The organizers reserve the right to disqualify participants who violate these terms and conditions or the spirit of the Hackathon.</li>
								<li className="">In the event of unforeseen circumstances, the Hackathon may be canceled or rescheduled.</li>
							</ul>
						</ol>

						<p className="text-base">By participating in the Hackathon, you acknowledge that you have read, comprehended, and accepted these terms and conditions. Non-compliance with these terms may result in disqualification. If you have any questions or concerns, please contact the organizers at <a href="mailto:info@sandlip.com" className="text-[#3fff00]">info@sandlip.com</a>
						</p>
					</section>
				</div>
    	<Footer />
    </>
  )
}

export default TermsCondition
