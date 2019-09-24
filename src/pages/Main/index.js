import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Container, Form, Input, SubmitButton } from './styles'

export default class Main extends Component {
  state = {
    newUser: '',
    users: [],
  }

  handleAddUser = () => {
    console.tron.clear()
    console.tron.log(this.state.newUser)
  }

  render() {
    const { user, newUser } = this.state
    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCaptalize="none"
            placeholder="Adicionar usuário"
            value={newUser}
            onChangeText={text => this.setState({ newUser: text })}
            returnKeyType="send"
            onSubmitEditing={this.handleAddUser}
          />
          <SubmitButton onPress={this.handleAddUser}>
            <Icon name="add" size={20} color="#FFF" />
          </SubmitButton>
        </Form>
      </Container>
    )
  }
}

Main.navigationOptions = {
  title: 'Main',
}
