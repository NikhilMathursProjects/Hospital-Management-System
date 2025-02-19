import React, { createContext, useEffect, useState } from "react";
import { apiService } from "../utils/utils";
import { useMsal } from "@azure/msal-react";

// Create the context
const UserProfileContext = createContext();

// Create a provider component
const UserProfileProvider = ({ children }) => {
  const [updateUI, setUpdateUI] = useState(false);
  // const { instance, accounts, inProgress } = useMsal();
  const [userProfile, setUserProfile] = useState(null);
  // const [azureProfile, setAzureProfile] = useState(null);
  const [isProfileLoading, setIsProfileLoading] = useState(true);
  // const [primaryMetric, setPrimaryMetric] = useState("offerScore");
  // const [numVendors, setNumVendors] = useState(3);
  // const [numOffers, setNumOffers] = useState(3);
  // const [offerName, setOfferName] = useState("");
  // const [thresholdType, setThresholdType] = useState("maximumNumberOfVendors");
  // const [currentOrganization, setCurrentOrganization] = useState("");
  // const [purchasePackage, setPurchasePackage] = useState("Solo Starter" || "");
  // const [interestedBuyerGuides, setInterestedBuyerGuides] = useState([]);
  // const [loadingBuyerGuide, setIsLoading] = useState(true);
  // const [buyerGuideName, setBuyerGuideName] = useState("");
  // const [scenarioName, setScenarioName] = useState("");
  // const [totalUnits, setTotalUnits] = useState();
  // const [userUnits, setUserUnits] = useState(1);
  // const [endUserUnits, setEndUserUnits] = useState(2);
  // const [buyerUnits, setBuyerUnits] = useState(1);
  // const [packageCount, setPackageCount] = useState(0);
  // const [orgList, setOrgList] = useState([]);
  // const [smartData, setSmartData] = useState({
  //   count: 0,
  //   items: [],
  // });
  // const [lowData, setLowData] = useState({
  //   count: 0,
  //   items: [],
  // });
  // const [budgetData, setBudgetData] = useState({
  //   count: 0,
  //   items: [],
  // });
  // const [premiumData, setPremiumData] = useState({
  //   count: 0,
  //   items: [],
  // });
  // const [initialData, setInitialData] = useState([]);
  // const [isLoading, setLoading] = useState(true);
  // const [budgetLoading, setBudgetLoading] = useState(true);
  // const [lowLoading, setLowLoading] = useState(true);
  // const [premiumLoading, setPremiumLoading] = useState(true);
  // const [, setError] = useState(null);

  const updateUserProfile = (profileData) => {
    apiService(
      "https://new/api/CreateUpdateProfile?",
      {
        method: "POST",
        data: {
          displayName: profileData?.displayName,
          email: profileData?.email,
          givenName: profileData?.givenName,
          surname: profileData?.surname,
          profileType: profileData?.profileType,
          companyName: profileData?.companyName,
          jobTitle: profileData?.jobTitle,
        },
      },
      setIsProfileLoading,
      setUserProfile,
      (error) => {
        // Handle error if needed
        console.error("Failed to create/update users:", error);
      }
    );
  };

  const fetchUserProfile = async (email) => {
    await apiService(
      `https://newtestfuncpython.azurewebsites.net/api/getUserProfile?email=${email}`,
      {},
      setIsProfileLoading,
      setUserProfile,
      (error) => {
        console.log("Failed to fetch profile:", error);
      }
    );
  };

  const currentOrg =
    userProfile && userProfile?.profileType === "endUser"
      ? userProfile?.companyName
      : currentOrganization;

  useEffect(() => {
    const fetchData = async () => {
      if (inProgress === "none" && accounts.length > 0) {
        try {
          const accessToken = await instance.acquireTokenSilent({
            scopes: ["https://graph.microsoft.com/User.Read"],
            account: accounts[0],
          });
          const response = await fetch("https://graph.microsoft.com/v1.0/me", {
            headers: {
              Authorization: `Bearer ${accessToken.accessToken}`,
            },
          });
          const data = await response.json();
          if (data && data.mail) {
            setAzureProfile(data);
            fetchUserProfile(data.mail);
          }
        } catch (error) {
          console.error("Error fetching user profile from Graph API:", error);
        }
      }
    };
    fetchData();
  }, [instance, accounts, inProgress, updateUI]);

  useEffect(() => {
    setCurrentOrganization(localStorage?.getItem("currentOrganization"));
    setBuyerGuideName(localStorage?.getItem("buyerGuideName"));
    setScenarioName(localStorage?.getItem("scenarioName"));
  }, []);

  useEffect(() => {
    if (userProfile) {
      apiService(
        `https://newtestfuncpython.azurewebsites.net/api/getInterestedBuyerGuides?email=${userProfile?.email}&currentOrganisation=${currentOrg}`,
        { method: "POST" },
        setIsLoading,
        setInterestedBuyerGuides,
        (err) => {
          console.log(err);
        }
      );
    }
  }, [userProfile, currentOrg, updateUI]);

  // Use effect for smart data
  useEffect(() => {
    const fetchSmartData = async () => {
      if (userProfile && currentOrg && buyerGuideName && scenarioName) {
        const payload = {
          email: userProfile?.email,
          currentOrganisation: currentOrg,
          currentBuyerGuide: buyerGuideName,
          currentScenario: scenarioName,
        };

        try {
          setLoading(true); // Start loading
          const response = await apiService(
            "https://newtestfuncpython.azurewebsites.net/api/smartValyouOfferCountAndNames?",
            {
              method: "POST",
              data: payload,
            }
          );

          if (response) {
            console.log("Response:", response); // Log the response for debugging
            setSmartData({
              count: response.SmartOfferCount,
              items: response.SmartOfferDetails.map(
                (offer) => offer.SmartOfferNames
              ),
            });
            setLoading(false);
          }
        } catch (err) {
          console.error("Error fetching data:", err);
          setError(err);
        } finally {
          setLoading(false); // End loading
        }
      }
    };

    fetchSmartData();
  }, [userProfile, currentOrg, buyerGuideName, scenarioName, updateUI]);

  // Use effect for low data
  useEffect(() => {
    const fetchLowData = async () => {
      if (userProfile && currentOrg && buyerGuideName && scenarioName) {
        const payload = {
          email: userProfile?.email,
          currentOrganisation: currentOrg,
          currentBuyerGuide: buyerGuideName,
          currentScenario: scenarioName,
        };

        try {
          setLowLoading(true); // Start loading
          const response = await apiService(
            "https://newtestfuncpython.azurewebsites.net/api/lowValyouOfferCountAndNames?",
            {
              method: "POST",
              data: payload,
            }
          );

          if (response) {
            console.log("Response Low:", response); // Log the response for debugging
            setLowData({
              count: response.LowOfferCount,
              items: response.LowOfferDetails.map(
                (offer) => offer.LowOfferNames
              ),
            });
            setLowLoading(false);
          }
        } catch (err) {
          console.error("Error fetching data:", err);
          setError(err);
        } finally {
          setLowLoading(false); // End loading
        }
      }
    };

    fetchLowData();
  }, [userProfile, currentOrg, buyerGuideName, scenarioName, updateUI]);

  // Use effect for budget data
  useEffect(() => {
    const fetchBudgetData = async () => {
      if (userProfile && currentOrg && buyerGuideName && scenarioName) {
        const payload = {
          email: userProfile?.email,
          currentOrganisation: currentOrg,
          currentBuyerGuide: buyerGuideName,
          currentScenario: scenarioName,
        };

        try {
          setBudgetLoading(true); // Start loading
          const response = await apiService(
            "https://newtestfuncpython.azurewebsites.net/api/budgetValyouOfferCountAndNames?",
            {
              method: "POST",
              data: payload,
            }
          );

          if (response) {
            console.log("Response:", response); // Log the response for debugging
            setBudgetData({
              count: response.BudgetOfferCount,
              items: response.BudgetOfferDetails.map(
                (offer) => offer.BudgetOfferNames
              ),
            });
            setBudgetLoading(false);
          }
        } catch (err) {
          console.error("Error fetching data:", err);
          setError(err);
        } finally {
          setBudgetLoading(false); // End loading
        }
      }
    };

    fetchBudgetData();
  }, [userProfile, currentOrg, buyerGuideName, scenarioName, updateUI]);

  // Use effect for premium data
  useEffect(() => {
    const fetchPremiumData = async () => {
      if (userProfile && currentOrg && buyerGuideName && scenarioName) {
        const payload = {
          email: userProfile?.email,
          currentOrganisation: currentOrg,
          currentBuyerGuide: buyerGuideName,
          currentScenario: scenarioName,
        };

        try {
          setPremiumLoading(true); // Start loading
          const response = await apiService(
            "https://newtestfuncpython.azurewebsites.net/api/premiumValyouOfferCountAndNames?",
            {
              method: "POST",
              data: payload,
            }
          );

          if (response) {
            console.log("Response:", response); // Log the response for debugging
            setPremiumData({
              count: response.PremiumOfferCount,
              items: response.PremiumOfferDetails.map(
                (offer) => offer.PremiumOfferNames
              ),
            });
            setPremiumLoading(false);
          }
        } catch (err) {
          console.error("Error fetching data:", err);
          setError(err);
        } finally {
          setPremiumLoading(false); // End loading
        }
      }
    };

    fetchPremiumData();
  }, [userProfile, currentOrg, buyerGuideName, scenarioName, updateUI]);

  return (
    <UserProfileContext.Provider
      value={{
        userProfile,
        updateUserProfile,
        isProfileLoading,
        azureProfile,
        updateUI,
        setUpdateUI,
        primaryMetric,
        setPrimaryMetric,
        setCurrentOrganization,
        currentOrganization,
        purchasePackage,
        setPurchasePackage,
        interestedBuyerGuides,
        buyerGuideName,
        setBuyerGuideName,
        scenarioName,
        setScenarioName,
        numVendors,
        setNumVendors,
        numOffers,
        setNumOffers,
        thresholdType,
        setThresholdType,
        totalUnits,
        setTotalUnits,
        userUnits,
        setUserUnits,
        endUserUnits,
        setEndUserUnits,
        buyerUnits,
        setBuyerUnits,
        packageCount,
        setPackageCount,
        smartData,
        setSmartData,
        lowData,
        setLowData,
        budgetData,
        setBudgetData,
        premiumData,
        setPremiumData,
        orgList,
        setOrgList,
        initialData,
        setInitialData,
        isLoading,
        setLoading,
        loadingBuyerGuide,
        budgetLoading,
        premiumLoading,
        lowLoading,
        offerName,
        setOfferName,
      }}
    >
      {children}
    </UserProfileContext.Provider>
  );
};

export { UserProfileContext, UserProfileProvider };
