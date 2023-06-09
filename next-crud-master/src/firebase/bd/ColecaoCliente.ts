import Cliente from "../../core/Cliente";
import ClienteRepositorio from "../../core/ClienteRepositorio";
import firebase from "firebase/app";
import "firebase/firestore";
import firebaseConfig from "../ConfigFirebase";

// Inicialize o Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default class ColecaoCliente implements ClienteRepositorio {
  #conversor = {
    toFirestore(cliente: Cliente) {
      return {
        nome: cliente.nome,
        idade: cliente.idade,
      };
    },
    fromFirestore(
      snapshot: firebase.firestore.QueryDocumentSnapshot,
      options?: firebase.firestore.SnapshotOptions
    ): Cliente {
      const dados = snapshot?.data(options);
      return new Cliente(dados.nome, dados.idade, snapshot?.id);
    },
  };

  async salvar(cliente: Cliente): Promise<Cliente> {
    if (cliente?.id) {
      await this.colecao().doc(cliente.id).set(cliente);
      return cliente;
    } else {
      const docRef = await this.colecao().add(cliente);
      const doc = await docRef.get();
      const dados = doc.data();
      return new Cliente(dados.nome, dados.idade, doc.id);
    }
  }

  async excluir(cliente: Cliente): Promise<void> {
    return this.colecao().doc(cliente.id).delete();
  }

  async obterTodos(): Promise<Cliente[]> {
    const query = await this.colecao().get();
    return query.docs.map((doc) => this.#conversor.fromFirestore(doc));
  }

  private colecao() {
    return firebase.firestore().collection("clientes").withConverter(this.#conversor);
  }
}
