/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Params } from "../blog/params";
import { Post } from "../blog/post";
import { SentPost } from "../blog/sent_post";
import { TimedoutPost } from "../blog/timedout_post";
export const protobufPackage = "sheldonlsides.planet.blog";
const baseGenesisState = {
    portId: "",
    postCount: 0,
    sentPostCount: 0,
    timedoutPostCount: 0,
};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.portId !== "") {
            writer.uint32(18).string(message.portId);
        }
        for (const v of message.postList) {
            Post.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.postCount !== 0) {
            writer.uint32(32).uint64(message.postCount);
        }
        for (const v of message.sentPostList) {
            SentPost.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.sentPostCount !== 0) {
            writer.uint32(48).uint64(message.sentPostCount);
        }
        for (const v of message.timedoutPostList) {
            TimedoutPost.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.timedoutPostCount !== 0) {
            writer.uint32(64).uint64(message.timedoutPostCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.postList = [];
        message.sentPostList = [];
        message.timedoutPostList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.portId = reader.string();
                    break;
                case 3:
                    message.postList.push(Post.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.postCount = longToNumber(reader.uint64());
                    break;
                case 5:
                    message.sentPostList.push(SentPost.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.sentPostCount = longToNumber(reader.uint64());
                    break;
                case 7:
                    message.timedoutPostList.push(TimedoutPost.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.timedoutPostCount = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.postList = [];
        message.sentPostList = [];
        message.timedoutPostList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.portId !== undefined && object.portId !== null) {
            message.portId = String(object.portId);
        }
        else {
            message.portId = "";
        }
        if (object.postList !== undefined && object.postList !== null) {
            for (const e of object.postList) {
                message.postList.push(Post.fromJSON(e));
            }
        }
        if (object.postCount !== undefined && object.postCount !== null) {
            message.postCount = Number(object.postCount);
        }
        else {
            message.postCount = 0;
        }
        if (object.sentPostList !== undefined && object.sentPostList !== null) {
            for (const e of object.sentPostList) {
                message.sentPostList.push(SentPost.fromJSON(e));
            }
        }
        if (object.sentPostCount !== undefined && object.sentPostCount !== null) {
            message.sentPostCount = Number(object.sentPostCount);
        }
        else {
            message.sentPostCount = 0;
        }
        if (object.timedoutPostList !== undefined &&
            object.timedoutPostList !== null) {
            for (const e of object.timedoutPostList) {
                message.timedoutPostList.push(TimedoutPost.fromJSON(e));
            }
        }
        if (object.timedoutPostCount !== undefined &&
            object.timedoutPostCount !== null) {
            message.timedoutPostCount = Number(object.timedoutPostCount);
        }
        else {
            message.timedoutPostCount = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        message.portId !== undefined && (obj.portId = message.portId);
        if (message.postList) {
            obj.postList = message.postList.map((e) => e ? Post.toJSON(e) : undefined);
        }
        else {
            obj.postList = [];
        }
        message.postCount !== undefined && (obj.postCount = message.postCount);
        if (message.sentPostList) {
            obj.sentPostList = message.sentPostList.map((e) => e ? SentPost.toJSON(e) : undefined);
        }
        else {
            obj.sentPostList = [];
        }
        message.sentPostCount !== undefined &&
            (obj.sentPostCount = message.sentPostCount);
        if (message.timedoutPostList) {
            obj.timedoutPostList = message.timedoutPostList.map((e) => e ? TimedoutPost.toJSON(e) : undefined);
        }
        else {
            obj.timedoutPostList = [];
        }
        message.timedoutPostCount !== undefined &&
            (obj.timedoutPostCount = message.timedoutPostCount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.postList = [];
        message.sentPostList = [];
        message.timedoutPostList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.portId !== undefined && object.portId !== null) {
            message.portId = object.portId;
        }
        else {
            message.portId = "";
        }
        if (object.postList !== undefined && object.postList !== null) {
            for (const e of object.postList) {
                message.postList.push(Post.fromPartial(e));
            }
        }
        if (object.postCount !== undefined && object.postCount !== null) {
            message.postCount = object.postCount;
        }
        else {
            message.postCount = 0;
        }
        if (object.sentPostList !== undefined && object.sentPostList !== null) {
            for (const e of object.sentPostList) {
                message.sentPostList.push(SentPost.fromPartial(e));
            }
        }
        if (object.sentPostCount !== undefined && object.sentPostCount !== null) {
            message.sentPostCount = object.sentPostCount;
        }
        else {
            message.sentPostCount = 0;
        }
        if (object.timedoutPostList !== undefined &&
            object.timedoutPostList !== null) {
            for (const e of object.timedoutPostList) {
                message.timedoutPostList.push(TimedoutPost.fromPartial(e));
            }
        }
        if (object.timedoutPostCount !== undefined &&
            object.timedoutPostCount !== null) {
            message.timedoutPostCount = object.timedoutPostCount;
        }
        else {
            message.timedoutPostCount = 0;
        }
        return message;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
