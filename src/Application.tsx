import { Col, Container, Row } from 'react-bootstrap'

import Navbar from './components/Navbar'
import CategoriesList from './components/CategoriesList'
import CategoryEditor from 'components/CategoryEditor'

const Application = () => (
  <>
    <Navbar />

    <Container fluid>
      <Row>
        <Col>
          <h1>Категории</h1>
          <CategoriesList />
        </Col>

        <Col>
          <CategoryEditor />
        </Col>
      </Row>
    </Container>
  </>
)

export default Application
