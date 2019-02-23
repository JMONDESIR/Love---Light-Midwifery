const navBuilder = {
  navBar() {
    const pre_navbar = document.querySelector("#pre_navbar")

    const pre_nav_list = document.createElement("ul")

    const ph_number = document.createElement("li")
    const a_ph = document.createElement("a")
    a_ph.href = "google.com"
    a_ph.innerHTML = "(212) 284-9433"
    ph_number.appendChild(a_ph)

    const directions = document.createElement("li")
    const a_di = document.createElement("a")
    a_di.href = "google.com"
    a_di.innerHTML = "Directions"
    directions.appendChild(a_di)

    const portal = document.createElement("li")
    const a_po = document.createElement("a")
    a_po.href = "www.webmd.com"
    a_po.innerHTML = "Health Portal"
    portal.appendChild(a_po)

    const pay_bill = document.createElement("li")
    const a_pb = document.createElement("a")
    a_pb.href = "google.com"
    a_pb.innerHTML = "Pay Bill"
    pay_bill.appendChild(a_pb)

    pre_navbar.appendChild(pre_nav_list)
    pre_nav_list.appendChild(pay_bill)
    pre_nav_list.appendChild(portal)
    pre_nav_list.appendChild(directions)
    pre_nav_list.appendChild(ph_number)
  }
}

export default navBuilder



