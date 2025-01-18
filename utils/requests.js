const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

async function fetchProperties({ showFeatured = false } = {}) {
  try {
    if (!apiDomain) {
      return [];
    }

    const res = await fetch(
      `${apiDomain}/properties${showFeatured ? "/featured" : ""}`
    );
    if (!res.ok) {
      throw new Error("failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

// Fetch single property
async function fetchProperty(id) {
  try {
    if (!apiDomain) {
      return [];
    }

    const res = await fetch(`${apiDomain}/properties/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

export { fetchProperty, fetchProperties };
