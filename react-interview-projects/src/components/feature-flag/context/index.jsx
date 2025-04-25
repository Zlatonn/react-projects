/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import featureFlagsDataSeviceCall from "../data";

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
  const [enabledFlags, setEnabledFlags] = useState({});
  const [loading, setLoading] = useState(false);

  async function fetchFeatureFlags() {
    try {
      setLoading(true);
      // original service call
      const response = await featureFlagsDataSeviceCall();
      setEnabledFlags(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      throw new Error(error);
    }
  }

  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  return <FeatureFlagsContext.Provider value={{ enabledFlags, loading }}>{children}</FeatureFlagsContext.Provider>;
}
