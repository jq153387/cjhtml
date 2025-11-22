import React, { useState } from 'react'
import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import { IoIosAddCircle } from 'react-icons/io'

function HomePage() {
  const [inputHtml, setInputHtml] = useState('')
  const [outputHtml, setOutputHtml] = useState('')
  const [attributesToRemove, setAttributesToRemove] = useState(
    'class title border cellpadding cellspacing style bordercolor width height valign align bgcolor face size color msimagelist lang'
  )
  const [tagsToRemove, setTagsToRemove] = useState(['', '', ''])

  const handleAddTagInput = () => {
    setTagsToRemove([...tagsToRemove, ''])
  }

  const handleTagChange = (index, value) => {
    const newTags = [...tagsToRemove]
    newTags[index] = value
    setTagsToRemove(newTags)
  }

  const handleClean = () => {
    if (!inputHtml) return

    // Create a temporary DOM element to manipulate the HTML
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = inputHtml

    // 1. Remove Attributes
    const attrs = attributesToRemove.split(/\s+/).filter((a) => a.trim() !== '')
    if (attrs.length > 0) {
      const allElements = tempDiv.getElementsByTagName('*')
      for (let i = 0; i < allElements.length; i++) {
        attrs.forEach((attr) => {
          allElements[i].removeAttribute(attr)
        })
      }
    }

    // 2. Remove Tags (Unwrap)
    tagsToRemove.forEach((tag) => {
      if (tag.trim() !== '') {
        const elements = tempDiv.getElementsByTagName(tag)
        // Convert to array to avoid live collection issues when modifying
        const elementsArray = Array.from(elements)
        elementsArray.forEach((el) => {
          // Replace the element with its children (unwrap)
          while (el.firstChild) {
            el.parentNode.insertBefore(el.firstChild, el)
          }
          el.parentNode.removeChild(el)
        })
      }
    })

    setOutputHtml(tempDiv.innerHTML)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(outputHtml).then(() => {
      alert('Copy completed')
    })
  }

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
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
                  value={attributesToRemove}
                  onChange={(e) => setAttributesToRemove(e.target.value)}
                />
                <Row id="attr_tarea2">
                  <Col>
                    <Button variant="link" onClick={handleAddTagInput}>
                      <IoIosAddCircle size="20px" />
                    </Button>
                  </Col>
                  {tagsToRemove.map((tag, index) => (
                    <Col xs lg="3" key={index}>
                      <Form.Control
                        type="text"
                        value={tag}
                        onChange={(e) => handleTagChange(index, e.target.value)}
                      />
                    </Col>
                  ))}
                </Row>
              </Col>
              <Col>
                <Row className="body">
                  <Col className="bodyCol">
                    <div className="buttonArea">
                      <Button variant="start" onClick={handleClean}>
                        開始清潔
                      </Button>
                    </div>
                    <Form.Control
                      as="textarea"
                      placeholder="在這貼上您所要清潔的HTML"
                      value={inputHtml}
                      onChange={(e) => setInputHtml(e.target.value)}
                    />
                  </Col>
                  <Col className="bodyCol">
                    <div className="buttonArea">
                      <Button
                        variant="light"
                        onClick={handleCopy}
                        disabled={!outputHtml}
                      >
                        複製清潔結果
                      </Button>
                    </div>
                    <Form.Control
                      as="textarea"
                      placeholder="複制清潔結果"
                      value={outputHtml}
                      readOnly
                    />
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
