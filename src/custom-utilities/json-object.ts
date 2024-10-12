type JSONObject = { [key: string]: JSONValue };
type JSONValue = string | number | boolean | null | JSONObject |
  JSONValue[];



function saveConfiguration(config: JSONObject) {
  const serializedConfig = JSON.stringify(config);
  // In a real application, this string could be saved to a file,
  // sent to a server, etc.
  console.log(`Configuration saved: ${serializedConfig}`);
}

const appConfig: JSONObject = {
  user: {
    name: "John Doe",
    preferences: {
      theme: "dark",
      notifications: true,
    },
  },
  version: 1,
  debug: false,
  // demo: () => console.log('demo'), Type '() => void' is not assignable to type 'JSONValue'.ts(2322)
};

saveConfiguration(appConfig);
