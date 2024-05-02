contatos = []

def adicionar_contato():
    nome = input("Digite o nome do contato: ")
    telefone = input("Digite o telefone do contato: ")
    email = input("Digite o email do contato: ")
    novo_contato = {'nome': nome, 'telefone': telefone, 'email': email}
    contatos.append(novo_contato)
    print("Contato adicionado com sucesso!")

def excluir_contato():
    nome = input("Digite o nome do contato que deseja excluir: ")
    for contato in contatos:
        if contato['nome'] == nome:
            contatos.remove(contato)
            print("Contato removido com sucesso!")
            return
    print("Contato não encontrado.")

def editar_contato():
    nome = input("Digite o nome do contato que deseja editar: ")
    for contato in contatos:
        if contato['nome'] == nome:
            telefone = input("Digite o novo telefone do contato: ")
            email = input("Digite o novo email do contato: ")
            contato['telefone'] = telefone
            contato['email'] = email
            print("Contato editado com sucesso!")
            return
    print("Contato não encontrado.")

def pesquisar_contato():
    nome = input("Digite o nome do contato que deseja pesquisar: ")
    for contato in contatos:
        if contato['nome'] == nome:
            print("Contato encontrado:")
            print(contato)
            return
    print("Contato não encontrado.")

while True:
    print("\nO que deseja fazer?")
    print("1. Adicionar contato")
    print("2. Excluir contato")
    print("3. Editar contato")
    print("4. Pesquisar contato")
    print("5. Sair")

    opcao = input("Digite o número da opção desejada: ")

    if opcao == '1':
        adicionar_contato()
    elif opcao == '2':
        excluir_contato()
    elif opcao == '3':
        editar_contato()
    elif opcao == '4':
        pesquisar_contato()
    elif opcao == '5':
        print("Saindo do programa. Até mais!")
        break
    else:
        print("Opção inválida. Por favor, escolha uma opção válida.")
