import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "sheldonlsides.planet.blog";
export interface MsgCreatePost {
    creator: string;
    title: string;
    content: string;
}
export interface MsgCreatePostResponse {
    id: number;
}
export interface MsgUpdatePost {
    creator: string;
    id: number;
    title: string;
    content: string;
}
export interface MsgUpdatePostResponse {
}
export interface MsgDeletePost {
    creator: string;
    id: number;
}
export interface MsgDeletePostResponse {
}
export interface MsgCreateSentPost {
    creator: string;
    postID: string;
    title: string;
    chain: string;
}
export interface MsgCreateSentPostResponse {
    id: number;
}
export interface MsgUpdateSentPost {
    creator: string;
    id: number;
    postID: string;
    title: string;
    chain: string;
}
export interface MsgUpdateSentPostResponse {
}
export interface MsgDeleteSentPost {
    creator: string;
    id: number;
}
export interface MsgDeleteSentPostResponse {
}
export declare const MsgCreatePost: {
    encode(message: MsgCreatePost, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePost;
    fromJSON(object: any): MsgCreatePost;
    toJSON(message: MsgCreatePost): unknown;
    fromPartial(object: DeepPartial<MsgCreatePost>): MsgCreatePost;
};
export declare const MsgCreatePostResponse: {
    encode(message: MsgCreatePostResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePostResponse;
    fromJSON(object: any): MsgCreatePostResponse;
    toJSON(message: MsgCreatePostResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreatePostResponse>): MsgCreatePostResponse;
};
export declare const MsgUpdatePost: {
    encode(message: MsgUpdatePost, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdatePost;
    fromJSON(object: any): MsgUpdatePost;
    toJSON(message: MsgUpdatePost): unknown;
    fromPartial(object: DeepPartial<MsgUpdatePost>): MsgUpdatePost;
};
export declare const MsgUpdatePostResponse: {
    encode(_: MsgUpdatePostResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdatePostResponse;
    fromJSON(_: any): MsgUpdatePostResponse;
    toJSON(_: MsgUpdatePostResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdatePostResponse>): MsgUpdatePostResponse;
};
export declare const MsgDeletePost: {
    encode(message: MsgDeletePost, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeletePost;
    fromJSON(object: any): MsgDeletePost;
    toJSON(message: MsgDeletePost): unknown;
    fromPartial(object: DeepPartial<MsgDeletePost>): MsgDeletePost;
};
export declare const MsgDeletePostResponse: {
    encode(_: MsgDeletePostResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeletePostResponse;
    fromJSON(_: any): MsgDeletePostResponse;
    toJSON(_: MsgDeletePostResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeletePostResponse>): MsgDeletePostResponse;
};
export declare const MsgCreateSentPost: {
    encode(message: MsgCreateSentPost, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateSentPost;
    fromJSON(object: any): MsgCreateSentPost;
    toJSON(message: MsgCreateSentPost): unknown;
    fromPartial(object: DeepPartial<MsgCreateSentPost>): MsgCreateSentPost;
};
export declare const MsgCreateSentPostResponse: {
    encode(message: MsgCreateSentPostResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateSentPostResponse;
    fromJSON(object: any): MsgCreateSentPostResponse;
    toJSON(message: MsgCreateSentPostResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateSentPostResponse>): MsgCreateSentPostResponse;
};
export declare const MsgUpdateSentPost: {
    encode(message: MsgUpdateSentPost, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateSentPost;
    fromJSON(object: any): MsgUpdateSentPost;
    toJSON(message: MsgUpdateSentPost): unknown;
    fromPartial(object: DeepPartial<MsgUpdateSentPost>): MsgUpdateSentPost;
};
export declare const MsgUpdateSentPostResponse: {
    encode(_: MsgUpdateSentPostResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateSentPostResponse;
    fromJSON(_: any): MsgUpdateSentPostResponse;
    toJSON(_: MsgUpdateSentPostResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateSentPostResponse>): MsgUpdateSentPostResponse;
};
export declare const MsgDeleteSentPost: {
    encode(message: MsgDeleteSentPost, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteSentPost;
    fromJSON(object: any): MsgDeleteSentPost;
    toJSON(message: MsgDeleteSentPost): unknown;
    fromPartial(object: DeepPartial<MsgDeleteSentPost>): MsgDeleteSentPost;
};
export declare const MsgDeleteSentPostResponse: {
    encode(_: MsgDeleteSentPostResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteSentPostResponse;
    fromJSON(_: any): MsgDeleteSentPostResponse;
    toJSON(_: MsgDeleteSentPostResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteSentPostResponse>): MsgDeleteSentPostResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    CreatePost(request: MsgCreatePost): Promise<MsgCreatePostResponse>;
    UpdatePost(request: MsgUpdatePost): Promise<MsgUpdatePostResponse>;
    DeletePost(request: MsgDeletePost): Promise<MsgDeletePostResponse>;
    CreateSentPost(request: MsgCreateSentPost): Promise<MsgCreateSentPostResponse>;
    UpdateSentPost(request: MsgUpdateSentPost): Promise<MsgUpdateSentPostResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    DeleteSentPost(request: MsgDeleteSentPost): Promise<MsgDeleteSentPostResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreatePost(request: MsgCreatePost): Promise<MsgCreatePostResponse>;
    UpdatePost(request: MsgUpdatePost): Promise<MsgUpdatePostResponse>;
    DeletePost(request: MsgDeletePost): Promise<MsgDeletePostResponse>;
    CreateSentPost(request: MsgCreateSentPost): Promise<MsgCreateSentPostResponse>;
    UpdateSentPost(request: MsgUpdateSentPost): Promise<MsgUpdateSentPostResponse>;
    DeleteSentPost(request: MsgDeleteSentPost): Promise<MsgDeleteSentPostResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
