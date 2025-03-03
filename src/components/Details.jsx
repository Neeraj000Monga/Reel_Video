/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { UpvoteButton } from "../styles/Button";
import { ButtonWrapper } from "../styles/style";
import { Title } from "../styles/Typography";
import { ArrowUp } from "../styles/Icon";

const Details = ({ productsData, currentIndex, variants, direction }) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        maxWidth: "400px",
        marginLeft: "57px",
        alignItems: "center",
      }}
    >
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={productsData[currentIndex].id}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <Box>
            <Title>{productsData[currentIndex].title}</Title>
            <Typography sx={{ color: "#71717a", pb: 2 }}>
              {productsData[currentIndex].shortDescription}
            </Typography>
            <Box>
              <UpvoteButton>
                Upvote
                <ButtonWrapper
                  sx={{
                    background: "#fff",
                    borderRadius: "50%",
                    width: "24px",
                    height: "24px",
                  }}
                >
                  <ArrowUp />
                </ButtonWrapper>
                <Box sx={{ fontWeight: "bold" }}>
                  {productsData[currentIndex].votes}
                </Box>
              </UpvoteButton>
            </Box>
          </Box>
        </motion.div>
      </AnimatePresence>
    </Box>
  );
};

export default Details;
