import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./footer.css";
import FeedIcon from "@mui/icons-material/Feed";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocalDiningIcon from "@mui/icons-material/LocalDining";

export default function Footer() {
  const footer = [
    {
      id: 1,
      footer1: "Новости",
      footer_icon: <FeedIcon />,
      cl:"footer_class"
    },
    {
      id: 2,
      footer1: "Вакансии",
      footer_icon: <AttachMoneyIcon />,
      cl:"footer_class"

    },
    {
      id: 3,
      footer1: "Контакты",
      footer_icon: <ContactMailIcon />,
      cl:"footer_class"

    },
  ];

  const footer1 = [
    {
      id: 1,
      footer1: "Правовые документы",
      footer_icon: <DocumentScannerIcon />,
      cl:"footer_class"

    },
    {
      id: 2,
      footer1: "Франшиза",
      footer_icon: <BusinessCenterIcon />,
      cl:"footer_class"

    },
    {
      id: 3,
      footer1: "Калорийность и состав",
      footer_icon: <LocalDiningIcon />,
      cl:"footer_class"

    },
  ];
  return (
    <div>
      <Container>
        <Row className=" mt-5">
          <Col md={2} xs={12}>
            {footer.map(({ footer1, footer_icon,cl }) => (
              <>
                <div className="footer_div">
                  {footer_icon}
                  <h6 className={cl}>{footer1}</h6>
                </div>
              </>
            ))}
          </Col>
          <Col md={4} xs={12}>
            {footer1.map(({ footer1, footer_icon,cl }) => (
              <>
                <div className="footer_div">
                  {footer_icon}
                  <h6 className={cl}>{footer1}</h6>
                </div>
              </>
            ))}
          </Col>
       

          <Col xs={2}>
            <button className="footer_btn">Полиция качества</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
