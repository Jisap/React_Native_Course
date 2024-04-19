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

// // Init your react-native SDK
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

// export async function signIn(email, password) {
//   try {

//     const session = await account.createEmailSession(email, password)
//     return session;

//   } catch (error) {
//     throw new Error(error)
//   }
// }
