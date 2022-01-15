import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteSentPost } from "./types/blog/tx";
import { MsgCreateTimedoutPost } from "./types/blog/tx";
import { MsgDeleteTimedoutPost } from "./types/blog/tx";
import { MsgCreateSentPost } from "./types/blog/tx";
import { MsgUpdatePost } from "./types/blog/tx";
import { MsgCreatePost } from "./types/blog/tx";
import { MsgUpdateSentPost } from "./types/blog/tx";
import { MsgSendIbcPost } from "./types/blog/tx";
import { MsgUpdateTimedoutPost } from "./types/blog/tx";
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
    msgDeleteSentPost: (data: MsgDeleteSentPost) => EncodeObject;
    msgCreateTimedoutPost: (data: MsgCreateTimedoutPost) => EncodeObject;
    msgDeleteTimedoutPost: (data: MsgDeleteTimedoutPost) => EncodeObject;
    msgCreateSentPost: (data: MsgCreateSentPost) => EncodeObject;
    msgUpdatePost: (data: MsgUpdatePost) => EncodeObject;
    msgCreatePost: (data: MsgCreatePost) => EncodeObject;
    msgUpdateSentPost: (data: MsgUpdateSentPost) => EncodeObject;
    msgSendIbcPost: (data: MsgSendIbcPost) => EncodeObject;
    msgUpdateTimedoutPost: (data: MsgUpdateTimedoutPost) => EncodeObject;
    msgDeletePost: (data: MsgDeletePost) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
