import React from 'react'

const FarmDescription = ({ place }) => (
  <div>
    {place}
  </div>
//   <% if (vegetable_products && vegetable_products.length > 0) { %>
//   <h4>Pflanzliche Produkte</h4>
//   <ul>
//   <% _.each(vegetable_products, function(product) { %>
//   <li class="<%= product %> vegetable"><%= I18n.t('products.' + product)%></li>
//   <% }); %>
//   </ul>
//   <% } %>
//
// <% if (animal_products && animal_products.length > 0) { %>
//   <h4>Tierische Produkte</h4>
//   <ul>
//   <% _.each(animal_products, function(product) { %>
//   <li class="<%= product %> animal"><%= I18n.t('products.' + product) %></li>
//   <% }); %>
//   </ul>
//   <% } %>
//
// <% if (beverages && beverages.length > 0) { %>
//   <h4>Getränke</h4>
//   <ul>
//   <% _.each(beverages, function(product) { %>
//   <li class="<%= product %> beverage"><%= I18n.t('products.' + product) %></li>
//   <% }); %>
//   </ul>
//   <% } %>
//
// <% if (additional_product_information) { %>
//   <h4>Zusätzliche Informationen zum Lebensmittelangebot</h4>
//   <p><%= additional_product_information %></p>
//   <% } %>
//
// <% if (acts_ecological || economical_behavior) { %>
//   <h4>Wirtschaftsweise</h4>
//   <ul>
//   <% } %>
// <% if (acts_ecological) { %>
//   <li>Dieser Hof wirtschaftet ökologisch.</li>
//   <% } %>
// <% if (economical_behavior) { %>
//   <li><%= economical_behavior %></li>
//   <% } %>
// <% if (acts_ecological || economical_behavior) { %>
//   </ul>
//   <% } %>
//
// <% if (places.length > 0) { %>
//   <h4><%= I18n.t('details.connected_depots')%></h4>
//   <ul>
//   <% _.each(places, function(item) { p = item.place; %>
//   <% if (p.type == "Depot") { %>
//   <li class="depot">
//   <% } if (p.type == "Farm") { %>
//   <li class="farm">
//   <% } %>
//   <a href="#places/<%= p.id %>/details" title="<%= p.name %>"><%= p.name %></a></li>
//   <% }); %>
//   </ul>
//   <% } %>
)

FarmDescription.propTypes = {
  place: React.PropTypes.shape({
    description: React.PropTypes.string,
  }).isRequired,
};

export default FarmDescription
