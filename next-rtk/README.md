NEXT JS and RTK - STEP BY STEP

Main components of Redux are 'Action', 'Reducer', 'Store' and 'Dispatcher'. We keep 'Action and Reducer' in same file and that file is known as 'Slice'. 'Slice' is a combination of Action and Reducer or (Action + Reducer). Slice is a collection of Redux 'Reducer' logic and "Actions" for a single feature in our app. But Action and Reducer must be of 'same feature' to make Slice works.

RTK FLOW - First we 'dispatch' the data from the app and this dispatching of data is know as 'Action'. Middleware who send 'Action data' to store is known as "Reducer". With the help of 'Reducer' we save the data in 'store'. In the last Store save the data whatever reducer sent.

Step 1: First make the folder in src or app (app is recommended) and make three files with the name 'store.js', 'slice.js', and 'providers.js'.

Step 2: Then make and export configureStore function in 'store.js' file. 'ConfigureStore' is a type of function in which we pass the reducers in object.

Step 3: Now make and export Provider function and pass children in the parameter in 'Providers.js' file. Provider connect the app and RTK in a singe file by wrapping them together.

Step 4: Export Children in 'Layout.js' file. All the components come in that Providers component so that Providers Component will get the data of all the components that we will make in the whole app.

Step 5: Now pass store in Provider function in 'Providers.js' file. Through this all the data which we will be pass through reducer will save in the store.

Step 6: Now we will make two components, First to 'send' the data in 'store' and Second to 'get' the data from the 'store'. And import both components in 'page.js' file.

Step 7: Now we will work in 'slice.js'. First, 'createSlice' and then 'initialState'. Then declare initialState, then make createSlice function and in that function and declare name, initialState, and 'reducers' in the 'object' inside in this function. Reducers is an object in which we will declare our 'actions'. In this object Action is like a 'function' which holds 'state' and 'action'. Then export action and reducer both. And also import this reducer in the 'store.js' file. Then import 'addUser' action from 'slice.js' file in 'addUsers' component. To send data in Slice we have to use Redux hook 'useDispatch'.

Step 8:

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
