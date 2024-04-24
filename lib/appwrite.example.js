// import {
//   Account,
//   Avatars,
//   Client,
//   Databases,
//   ID,
//   Storage,
// } from 'react-native-appwrite';


// export const appwriteConfig = {
//   endpoint: '',
//   platform: '',
//   projectId: '',
//   databaseId: '',
//   userCollectionId: '',
//   videoCollectionId: '',
//   storageId: ''
// }

// const client = new Client();

// client
//   .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
//   .setProject(appwriteConfig.projectId) // Your project ID
//   .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
//   ;

// const account = new Account(client);
// const storage = new Storage(client);
// const avatars = new Avatars(client);
// const databases = new Databases(client)

// // Register user
// export async function createUser(email, password, username) {

//   try {
//     const newAccount = await account.create(
//       ID.unique(),
//       email,
//       password,
//       username,
//     )

//     if (!newAccount) throw Error;

//     const avatarUrl = avatars.getInitials(username);

//     await signIn(email, password)

//     const newUser = await databases.createDocument(
//       appwriteConfig.databaseId,
//       appwriteConfig.userCollectionId,
//       ID.unique(),
//       {
//         accountId: newAccount.$id,
//         email: email,
//         username: username,
//         avatar: avatarUrl
//       }
//     )

//     return newUser

//   } catch (error) {
//     throw new ErrorEvent(error)
//   }
// }

// // Sign In
// export async function signIn(email, password) {
//   try {

//     const session = await account.createEmailSession(email, password)
//     return session;

//   } catch (error) {
//     throw new Error(error)
//   }
// }

// // Get Account
// export async function getAccount() {
//   try {
//     const currentAccount = await account.get();

//     return currentAccount;
//   } catch (error) {
//     throw new Error(error);
//   }
// }

// // Get Current User
// export async function getCurrentUser() {
//   try {
//     const currentAccount = await getAccount();            // Obtiene la cuenta actual del usuario que está autenticado en la aplicación. 
//     if (!currentAccount) throw Error;                     // Sino existe o no está autenticado o sucedio algún error

//     const currentUser = await databases.listDocuments(    // Obtiene todos los documentos de la bd
//       appwriteConfig.databaseId,
//       appwriteConfig.userCollectionId,
//       [Query.equal("accountId", currentAccount.$id)]      // cuya "accountId" === al ID de la cuenta actual del usuario.
//     );

//     if (!currentUser) throw Error;

//     return currentUser.documents[0];                      // devuelve el primer documento encontrado
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// }