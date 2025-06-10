import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const faqData = [
  {
    question: "How do I reset my password?",
    answer:
      "You can reset your password by clicking on the 'Forgot Password' link on the login page. A password reset link will be sent to your registered email address.",
  },
  {
    question: "How can I add new users to the system?",
    answer:
      "Navigate to the 'Users' section in the sidebar and click on 'Add New User'. Fill in the required details and assign appropriate permissions.",
  },
  {
    question: "Where can I view system analytics?",
    answer:
      "The 'Dashboard' section provides an overview of system analytics. For more detailed reports, visit the 'Analytics' or 'Reports' section.",
  },
  {
    question: "How do I manage user permissions?",
    answer:
      "User permissions can be managed in the 'User Management' section. Select a user and click on 'Edit Permissions' to modify their access levels.",
  },
  {
    question: "What should I do if I encounter a system error?",
    answer:
      "First try refreshing the page. If the error persists, check the 'System Logs' section for more details. For critical issues, contact our support team.",
  },
  {
    question: "How often is data backed up?",
    answer:
      "The system automatically backs up data every 24 hours. You can also manually trigger backups from the 'System Settings' section.",
  },
  {
    question: "Can I customize the dashboard layout?",
    answer:
      "Yes, most dashboard components can be rearranged or hidden. Click on the 'Customize Dashboard' button to modify the layout.",
  },
];

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      {faqData.map((faq, index) => (
        <Accordion
          key={index}
          defaultExpanded={index === 0}
          sx={{
            mb: 2,
            transition: "all 0.2s ease-in-out",
            backgroundColor: colors.primary[400],
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ;
