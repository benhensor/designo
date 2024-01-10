import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PageCardWeb from "./PageCardWeb";
import PageCardApp from "./PageCardApp";
import PageCardGraphic from "./PageCardGraphic";



const PagePreviewContainer = styled(motion.div)`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 24px;
	height: 640px;
	margin-bottom: 160px;

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		margin: 0 5% 120px 5%;
        height: auto;
	}

	@media screen and (max-width: 375px) {
		margin: 0 5% 80px 5%;
	}
`

const Stacker = styled.div`
    display: grid;
	grid-template-columns: 1fr;

    gap: 24px;
    height: 100%;
`

export default function PagePreview() {
	return (
		<PagePreviewContainer
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeInOut', duration: 1 }}
        >
			<PageCardWeb />
            <Stacker>
			<PageCardApp />
			<PageCardGraphic />
            </Stacker>
		</PagePreviewContainer>
	);
}
