import Head from "next/head";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css";

function HomePage() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="ROBOTS" content="INDEX,FOLLOW" />
        <meta name="revisit-after" content="1 days" />
        <meta name="description" content="CJHTML能幫你得到一個乾淨漂亮的HTML" />
        <meta
          name="keywords"
          content="HTML標籤清潔,html清潔屬性,自動刪除屬性"
        />
        <meta name="copyright" content="Copyright © 2013 CITIAR 版權所有" />
        <title>CJHTML</title>
      </Head>
        <img src="cjhtml.png" />
      <Container fluid>
        <Row>
          <Col sm={4}>
            <h3>告訴我你所不要的屬性與標籤</h3>
            <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>屬性</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="class title border cellpadding cellspacing style bordercolor width height valign align bgcolor face size color msimagelist lang" />
                </Form.Group>
            </Form>
          </Col>
          <Col sm={4}>
            <h3>在這貼上您所要清潔的HTML</h3>
            <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={5} />
                </Form.Group>
            </Form>
          </Col>
          <Col sm={4}>
              <>
                <Button>開始清潔</Button>
                <Button variant="light">複制清潔結果</Button> 
                </>
            <h3>清潔結果</h3>
            <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={5}/>
                </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
