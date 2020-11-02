import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { IoIosAddCircle } from "react-icons/io";

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
      <img src="cjhtml.png" className="logo"/>
      <Container fluid>
        <Row className="body">
          <Col sm={4} className="bodyCol">
         
            <Form>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="告訴我你所不要的屬性與標籤"
                />
                 <div className="noNeed">
            <h3>標籤</h3>
                 <Row>
                <Col>
                <>
                  <Button variant="link"><IoIosAddCircle size="20px" /></Button>
                </>
                </Col>
                <Col xs lg="3">
                  <Form.Control type="text"/>
                </Col>
                <Col xs lg="3">
                  <Form.Control type="text"/>
                </Col>
                <Col xs lg="3">
                  <Form.Control type="text"/>
                </Col>
          </Row>
          </div>
              </Form.Group>
            </Form>
          </Col>
          <Col sm={4} className="bodyCol">
            <Form>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={5} placeholder="在這貼上您所要清潔的HTML" />
              </Form.Group>
            </Form>
          </Col>
          <Col sm={4} className="bodyCol">
            <>
              <div className="buttonArea">
              <Button>開始清潔</Button>
              <Button variant="light">複製清潔結果</Button>
              </div>
            </>
            
            <Form>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={5}  placeholder="複制清潔結果"/>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomePage
