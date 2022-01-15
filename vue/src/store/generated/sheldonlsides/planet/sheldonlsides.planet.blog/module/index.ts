// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateSentPost } from "./types/blog/tx";
import { MsgCreateTimedoutPost } from "./types/blog/tx";
import { MsgUpdateSentPost } from "./types/blog/tx";
import { MsgDeleteSentPost } from "./types/blog/tx";
import { MsgUpdateTimedoutPost } from "./types/blog/tx";
import { MsgUpdatePost } from "./types/blog/tx";
import { MsgCreatePost } from "./types/blog/tx";
import { MsgDeleteTimedoutPost } from "./types/blog/tx";
import { MsgDeletePost } from "./types/blog/tx";


const types = [
  ["/sheldonlsides.planet.blog.MsgCreateSentPost", MsgCreateSentPost],
  ["/sheldonlsides.planet.blog.MsgCreateTimedoutPost", MsgCreateTimedoutPost],
  ["/sheldonlsides.planet.blog.MsgUpdateSentPost", MsgUpdateSentPost],
  ["/sheldonlsides.planet.blog.MsgDeleteSentPost", MsgDeleteSentPost],
  ["/sheldonlsides.planet.blog.MsgUpdateTimedoutPost", MsgUpdateTimedoutPost],
  ["/sheldonlsides.planet.blog.MsgUpdatePost", MsgUpdatePost],
  ["/sheldonlsides.planet.blog.MsgCreatePost", MsgCreatePost],
  ["/sheldonlsides.planet.blog.MsgDeleteTimedoutPost", MsgDeleteTimedoutPost],
  ["/sheldonlsides.planet.blog.MsgDeletePost", MsgDeletePost],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgCreateSentPost: (data: MsgCreateSentPost): EncodeObject => ({ typeUrl: "/sheldonlsides.planet.blog.MsgCreateSentPost", value: MsgCreateSentPost.fromPartial( data ) }),
    msgCreateTimedoutPost: (data: MsgCreateTimedoutPost): EncodeObject => ({ typeUrl: "/sheldonlsides.planet.blog.MsgCreateTimedoutPost", value: MsgCreateTimedoutPost.fromPartial( data ) }),
    msgUpdateSentPost: (data: MsgUpdateSentPost): EncodeObject => ({ typeUrl: "/sheldonlsides.planet.blog.MsgUpdateSentPost", value: MsgUpdateSentPost.fromPartial( data ) }),
    msgDeleteSentPost: (data: MsgDeleteSentPost): EncodeObject => ({ typeUrl: "/sheldonlsides.planet.blog.MsgDeleteSentPost", value: MsgDeleteSentPost.fromPartial( data ) }),
    msgUpdateTimedoutPost: (data: MsgUpdateTimedoutPost): EncodeObject => ({ typeUrl: "/sheldonlsides.planet.blog.MsgUpdateTimedoutPost", value: MsgUpdateTimedoutPost.fromPartial( data ) }),
    msgUpdatePost: (data: MsgUpdatePost): EncodeObject => ({ typeUrl: "/sheldonlsides.planet.blog.MsgUpdatePost", value: MsgUpdatePost.fromPartial( data ) }),
    msgCreatePost: (data: MsgCreatePost): EncodeObject => ({ typeUrl: "/sheldonlsides.planet.blog.MsgCreatePost", value: MsgCreatePost.fromPartial( data ) }),
    msgDeleteTimedoutPost: (data: MsgDeleteTimedoutPost): EncodeObject => ({ typeUrl: "/sheldonlsides.planet.blog.MsgDeleteTimedoutPost", value: MsgDeleteTimedoutPost.fromPartial( data ) }),
    msgDeletePost: (data: MsgDeletePost): EncodeObject => ({ typeUrl: "/sheldonlsides.planet.blog.MsgDeletePost", value: MsgDeletePost.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
