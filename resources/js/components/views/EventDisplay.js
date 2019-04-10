import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { CardDeck } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

//import components
import ConfirmModalContainer from '../ConfirmModalContainer'

export default class EventDisplay extends Component {
  render() {
    return(
      <>
        <div>
          <Card id="text-center" style={{ width: '100%', marginBottom: '0.5rem', background: "#D6E5E3", border:"solid 1.50px #40C0DD" }}>
            <Card.Header> {this.props.package.name} {this.props.package.date}</Card.Header>
            <Card.Body>
              <Card.Text >
              L’idée est d’avoir une interaction intuitive, facile, accueillante, qui ne fasse pas peur, dans laquelle le visiteur se lance sans appréhension au niveau du temps que ça va prendre et de la difficulté imaginée du bazar.
              Le fonctionnement de base: comprendre quel est le problème du visiteur.
              On part de questions généralistes qui permettent de définir un premier cadre de possibilités et les questions suivantes permettent de rétrécir ce cadre pour arriver à quelque chose de plus précis et concret.
              On passe à un autre mode d'interaction quand cela est considéré souhaitable, dans un ordre logique, pour arriver à un vrai humain le plus tard possible (si possible régler le problème avant cette étape). Si un humain est disponible, cela peut-être un chat, un appel (comme avec les banques et autres), si un humain n’est pas disponible, les messages différés (emails) sont la seule option.
              On guide le visiteur avec ce système, mais dès que l’on peut, on lui propose automatiquement des options de canal de communication. Après quelques questions-réponses, on l’emmène au ChatBot, mais on peut lui proposer de passer directement au mail par exemple.
              L’idée est de récolter un maximum de données de manière automatisées, avec le minimum d’intervention humaine.
              {this.props.package.description}
              </Card.Text>
              <p>Lorem ipsum</p>
            </Card.Body>
            <Card.Footer className="text-muted">
              <Row>
                <Col>
                  <p>I want to go !</p>
                </Col>
                <Col>
                <Form>
                  <Link to={"/event-edit-"+this.props.package.id}>
                    <Button  id="buttonevent" style={{border:"solid 1.50px #40C0DD"}}>Edit</Button>
                  </Link>
                </Form>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="mb-3">
                      <Form.Check
                        custom
                        type='checkbox'
                        id="custom-checkbox"
                        label="Register to this event"
                      />
                  </div>
                </Col>
                <Col>
                  <div><ConfirmModalContainer
                    variant="danger"
                    label="Erase"
                    message="Do you want to delete this event ?"
                    onClick={this.props.onClick}/>
                  </div>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </div>
        <div className="row">
          {this.props.participants.map(participant =>
          <div className="card col-4" key={Math.random()}>
          <div className="card-body" style={{border:"solid 1.50px #40C0DD"}}>
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-muted">Lorem erigneriogn rz kgnzrkgn zirzr gpozr,po z,ôfzrpo,fzepof zpopoz z jfpizeropf,pozfpoz pofjop</h6>
            <p className="card-text">{participant.pseudo}</p>
          </div>
        </div>
            
          )}
        </div>
      </>
    )
  }
}
