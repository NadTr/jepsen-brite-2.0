import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { CardDeck } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

//import components
import ConfirmModalContainer from '../ConfirmModalContainer'

export default class EventDisplay extends Component {
  render() {
    return(
      <React.Fragment>
        <div>
          <Card className="text-center">
            <Card.Header> {this.props.package.name} {this.props.package.date}</Card.Header>
            <Card.Body>
              <Card.Text>
              L’idée est d’avoir une interaction intuitive, facile, accueillante, qui ne fasse pas peur, dans laquelle le visiteur se lance sans appréhension au niveau du temps que ça va prendre et de la difficulté imaginée du bazar.
              Le fonctionnement de base: comprendre quel est le problème du visiteur.
              On part de questions généralistes qui permettent de définir un premier cadre de possibilités et les questions suivantes permettent de rétrécir ce cadre pour arriver à quelque chose de plus précis et concret.
              On passe à un autre mode d'interaction quand cela est considéré souhaitable, dans un ordre logique, pour arriver à un vrai humain le plus tard possible (si possible régler le problème avant cette étape). Si un humain est disponible, cela peut-être un chat, un appel (comme avec les banques et autres), si un humain n’est pas disponible, les messages différés (emails) sont la seule option.
              On guide le visiteur avec ce système, mais dès que l’on peut, on lui propose automatiquement des options de canal de communication. Après quelques questions-réponses, on l’emmène au ChatBot, mais on peut lui proposer de passer directement au mail par exemple.
              L’idée est de récolter un maximum de données de manière automatisées, avec le minimum d’intervention humaine.
              {this.props.package.description}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer className="text-muted">
              <Link to={"/event-edit-"+this.props.package.id}>
                <Button variant="secondary">Edit Event</Button>
              </Link>
              <div><ConfirmModalContainer
                variant="danger"
                label="Erase"
                message="Do you want to delete this event ?" 
                onClick={this.props.onClick}/>
              </div>
            </Card.Footer>
          </Card>
        </div>
        <CardDeck>
          <Card>
            <Card.Img variant="top" src="#" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="#" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="#" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </React.Fragment>
    )
  }
}
