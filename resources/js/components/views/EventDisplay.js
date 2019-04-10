import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { CardDeck } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

//import components
import ConfirmModalContainer from '../ConfirmModalContainer'
import {SessionProvider, SessionContext} from '../providers/SessionProvider';

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
            </Card.Body>
            <Card.Footer className="text-muted">
          {(this.context.state.logIn === false ) ?
                <div>Log in to register to this event.</div>
            :
              <Col>
                <Row>
                  <Button variant="success" onClick={this.props.optInEvent}>I want to participate</Button>
                </Row>
                <Row>
                  <Button variant="danger" onClick={this.props.optOutEvent}>I no longer want to come</Button>
                </Row>
              </Col>
            }
            {(this.context.state.session.id === this.props.package.author) ?
              <Col>
                <Row>
                  <Form>
                    <Link to={"/event-edit-"+this.props.package.id}>
                      <Button variant="secondary">Edit Event</Button>
                    </Link>
                  </Form>
                </Row>
                <Row>
                  <div><ConfirmModalContainer
                    variant="danger"
                    label="Erase"
                    message="Do you want to delete this event ?"
                    onClick={this.props.onClick}/>
                  </div>
                </Row>
              </Col>
              :
              <div>Not the author, can't access edit or delete functionnalities</div>
            }
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

EventDisplay.contextType=SessionContext
