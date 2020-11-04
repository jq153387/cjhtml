import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import { IoIosAddCircle } from 'react-icons/io'

function HomePage() {
  return (
    <>
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
      <header>
        <Navbar>
          <Navbar.Brand href="#home">
            <img src="cjhtml.png" className="logo" style={{ width: '160px' }} />
            &nbsp;&nbsp;CJHTML能幫你得到一個乾淨漂亮的HTML
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Form.Control as="select" size="sm" custom>
                <option>EN</option>
                <option>繁中</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <main>
        <Container fluid>
          <Form>
            <Row>
              <Col lg="3">
                <Form.Control
                  as="textarea"
                  placeholder="告訴我你所不要的屬性與標籤"
                  id="attr_tarea1"
                />
                <Row id="attr_tarea2">
                  <Col>
                    <Button variant="link">
                      <IoIosAddCircle size="20px" />
                    </Button>
                  </Col>
                  <Col xs lg="3">
                    <Form.Control type="text" />
                  </Col>
                  <Col xs lg="3">
                    <Form.Control type="text" />
                  </Col>
                  <Col xs lg="3">
                    <Form.Control type="text" />
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row className="body">
                  <Col className="bodyCol">
                    <div className="buttonArea">
                      <Button variant="start">開始清潔</Button>
                    </div>
                    <Form.Control
                      as="textarea"
                      placeholder="在這貼上您所要清潔的HTML"
                    />
                  </Col>
                  <Col className="bodyCol">
                    <div className="buttonArea">
                      <Button variant="light">複製清潔結果</Button>
                    </div>
                    <Form.Control as="textarea" placeholder="複制清潔結果" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
        </Container>
      </main>
    </>
  )
}

export default HomePage
