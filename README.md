📦 Explore More – React + TypeScript + Vite

Este projeto foi desenvolvido utilizando React, TypeScript e Vite, com foco em performance, organização e simplicidade.
Ele apresenta um componente visual de exploração de produtos (Explore More), com categorias e grid de imagens.

🚀 Tecnologias Utilizadas

⚛️ React — Biblioteca para construção da interface

🟦 TypeScript — Tipagem estática para maior segurança

⚡ Vite — Bundler rápido com Hot Module Replacement (HMR)

🎨 CSS puro — Estilização simples e direta

🧹 ESLint — Padronização e qualidade de código

📁 Estrutura do Projeto
src/
├── components/
│   └── ExploreMore.tsx
│   └── ExploreMore.css
├── App.tsx
├── main.tsx
├── index.css

🧩 Componente Principal

O projeto contém um componente chamado ExploreMore, responsável por:

Exibir um título central

Renderizar categorias (tabs)

Mostrar um grid responsivo de imagens

Alternar estado ativo com React Hooks

🛠️ Instalação e Execução
1️⃣ Clone o repositório
git clone https://github.com/seu-usuario/seu-projeto.git

2️⃣ Acesse o diretório
cd seu-projeto

3️⃣ Instale as dependências
npm install

4️⃣ Execute o projeto
npm run dev


O projeto estará disponível em:

http://localhost:5173

📜 Scripts Disponíveis
Script	Descrição
npm run dev	Inicia o servidor de desenvolvimento
npm run build	Gera a build de produção
npm run preview	Visualiza a build localmente
npm run lint	Executa o ESLint
🔍 ESLint e Qualidade de Código

Este projeto utiliza ESLint com suporte a TypeScript.
Para aplicações em produção, recomenda-se habilitar regras mais rigorosas e tipadas.

Configuração recomendada (Type-aware)
tseslint.configs.recommendedTypeChecked


Ou para regras mais estritas:

tseslint.configs.strictTypeChecked

⚛️ Plugins Oficiais do Vite

Atualmente, dois plugins oficiais estão disponíveis:

@vitejs/plugin-react — Usa Babel para Fast Refresh

@vitejs/plugin-react-swc — Usa SWC (mais rápido)

Recomendação padrão:

npm install @vitejs/plugin-react-swc

🧠 React Compiler

O React Compiler não vem ativado por padrão devido ao impacto em performance durante o desenvolvimento e build.

Caso deseje ativá-lo, consulte:
👉 https://react.dev/learn/react-compiler/installation

🎨 Estilização

CSS separado por componente

Layout responsivo com Grid

Uso de object-fit: cover para imagens

Hover suave e visual moderno

📌 Boas Práticas Adotadas

Componentes simples e reutilizáveis

Estado controlado com useState

Separação de responsabilidade (JSX / CSS)

Tipagem explícita com TypeScript

📄 Licença

Este projeto é livre para uso e modificação para fins educacionais e profissionais.
