import React from "react";

const Wishlist = ({ wishlist }) => {
  return (
    <div className="wishlist-container">
      <h3>Wishlist ({wishlist.length})</h3>

      {wishlist.length === 0 ? (
        <p>No countries added to wishlist yet.</p>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map((country) => (
            <div key={country.cca3} className="wishlist-card">
              <img src={country.flags.png} alt={country.name.common} width="100" />
              <h4>{country.name.common}</h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
