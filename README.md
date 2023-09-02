## Padrão de commit

Ao *comitar* você deve usar as seguintes palavras-chave para identificar o tipo de *commit* que você está realizando:

- **FEAT** - Implementação de novo código ou função
- **CHANGE** - Alteração de código ou função
- **ADD** - Adição de ícones, modalidades e expansão de arrays e objetos
- **COMMENT** - Inclusão ou remoção de comentários
- **FIX** - Correção de bugs
- **LINT** - Correção de erros do linter
- **TEST** - Implementação ou alteração nos testes
- **REVIEW** - Alterações e correções durante um code review

### Exemplos:

- `FEAT: Criado hook de localização`
- `CHANGE: Refatoração da função que busca localização do usuário`
- `ADD: Inclusão de ícones da modalidade Hangar`
- `COMMENT: Removido comentários`
- `FIX: Limitação de casas decimais do valor realizado para evitar re-renderização`
- `LINT: Corrigido espaçamentos`
- `TEST: Teste de retorno da rota de chamados`
- `REVIEW: Correções na tarefa BIA-215`

Os *commits* devem seguir este padrão para melhor identifica-los em caso de erro de implementação.
