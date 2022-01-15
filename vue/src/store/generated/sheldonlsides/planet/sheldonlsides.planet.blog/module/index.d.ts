import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
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
export declare const MissingWalletError: Error;
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => any;
    msgCreateSentPost: (data: MsgCreateSentPost) => EncodeObject;
    msgCreateTimedoutPost: (data: MsgCreateTimedoutPost) => EncodeObject;
    msgUpdateSentPost: (data: MsgUpdateSentPost) => EncodeObject;
    msgDeleteSentPost: (data: MsgDeleteSentPost) => EncodeObject;
    msgUpdateTimedoutPost: (data: MsgUpdateTimedoutPost) => EncodeObject;
    msgUpdatePost: (data: MsgUpdatePost) => EncodeObject;
    msgCreatePost: (data: MsgCreatePost) => EncodeObject;
    msgDeleteTimedoutPost: (data: MsgDeleteTimedoutPost) => EncodeObject;
    msgDeletePost: (data: MsgDeletePost) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
