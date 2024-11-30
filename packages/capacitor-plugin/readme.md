# capacitor-android-intents

Simple intent tools for Capacitor on Android platform.

## Install

```bash
npm install capacitor-android-intents
npx cap sync
```

## Usage

## API

<docgen-index>

* [`registerBroadcastReceiver(...)`](#registerbroadcastreceiver)
* [`unregisterBroadcastReceiver(...)`](#unregisterbroadcastreceiver)
* [`sendBroadcastIntent(...)`](#sendbroadcastintent)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### registerBroadcastReceiver(...)

```typescript
registerBroadcastReceiver(options: { filters: string[]; }, callback: (data: { [key: string]: any; }) => void) => Promise<string>
```

| Param          | Type                                                    |
| -------------- | ------------------------------------------------------- |
| **`options`**  | <code>{ filters: string[]; }</code>                     |
| **`callback`** | <code>(data: { [key: string]: any; }) =&gt; void</code> |

**Returns:** <code>Promise&lt;string&gt;</code>

--------------------


### unregisterBroadcastReceiver(...)

```typescript
unregisterBroadcastReceiver(options: { id: string; }) => Promise<void>
```

| Param         | Type                         |
| ------------- | ---------------------------- |
| **`options`** | <code>{ id: string; }</code> |

--------------------


### sendBroadcastIntent(...)

```typescript
sendBroadcastIntent(options: { action: string; value: { [key: string]: any; }; }) => Promise<void>
```

| Param         | Type                                                             |
| ------------- | ---------------------------------------------------------------- |
| **`options`** | <code>{ action: string; value: { [key: string]: any; }; }</code> |

--------------------

</docgen-api>
