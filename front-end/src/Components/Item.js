import React from "react";
import {
  Route,
  NavLink,
  useParams,
  useRouteMatch
} from "react-router-dom";
import ItemDescription from "./ItemDescription";
import ItemShipping from "./ItemShipping";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';



function Item({shopItem}) {
  const params = useParams();
  const routeMatch = useRouteMatch();
console.log(shopItem)
  // const shopItem = props.items.find((item) => item.id === Number(params.id));

  return (
    <div className="item-wrapper">

      <Card className="item-header">
       
          <CardImg top width="70%" src={shopItem.imageUrl} alt={shopItem.commodityproduct} />
       
          <CardBody>
            <CardTitle>{shopItem.commodityproduct}</CardTitle>
            <CardTitle>{shopItem.SubCategory}</CardTitle>
          </CardBody>
      </Card>

      <nav className="item-sub-nav">
        <NavLink exact to={routeMatch.url}>
          Description
        </NavLink>
        <NavLink to={`${routeMatch.url}/shipping`}>Shipping info</NavLink>
      </nav>

      <Route exact path={routeMatch.path}>
        <ItemDescription item={shopItem} />
      </Route>

      <Route path={`${routeMatch.path}/shipping`}>
        <ItemShipping item={shopItem} />
      </Route>
    </div>
  );
}
export default Item;