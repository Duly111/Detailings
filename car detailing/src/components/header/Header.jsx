import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from "../cart/CartContext";


export default function Header(){

  const { cartItems } = useCart(); 
  const cartCount = cartItems.length;
 
    return(
        
        <header>
        <div className="logo">
          <Link to="/">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUQAAACcCAMAAAAwLiICAAAAe1BMVEX///8AAADV1dUrKyvv7+/39/e+vr7g4OCSkpL6+vqioqIbGxv09PQ+Pj7Nzc1ycnJsbGwTExPp6ekxMTFjY2Pk5ORGRkaLi4tSUlIgICC1tbUICAh/f3+bm5vHx8c4ODirq6t8fHxNTU1aWloXFxclJSVfX1+Wlpanp6fDPpe1AAAR9klEQVR4nO2d12KjOhCGETXEuGHjXgC3vP8THoR6w8LgzQnJf7Fr0wKfVWZGI+E4f3qvYmVLEnZW+g0P8o36WmTyJhd01uJXUQxHYBpI29w5GCta3VpRvPwiiif4wJ/SRnfu+eqh63Zl8aI2EwPVyQPLNdi74lb3ulWqeGuI4CAX8IEqu4IydZbgLDJzRyMNxENLiODwj57ie+Wewaqqt9EZLIW6F22vfUAEx3/1IN8ofwzOdUXeAZDzO6LtvBeIYPcvHuNblV7ANkIfj2B+4vZE3r4fiIOnmFzAjZAL7mDB9ceRB3qCeJv8k2f5LgVLAFinnN54a7E/iGDrqhcajOID2Ofcd6FZ7BEiGGuuNBAFU7m9+gSANovRoj+IYKOx24ehh2J/xCVYEU+tV4iS+TQcfWhsOHcBpvhjBTFST3oVIpgmb36cb9EXAB9q8ThRJzo79wpxkK7Lbg4KXRWrnGNkkfQNEeTvfJxvUWiKDfhL3Cxm454hKnGin67JFlwM8ZWsKqLw/7R3iGBYRre7B3djvPQ0rzucN0AchW98pn8t9wzGDYbbunbU0lXvEIGnueIPVXQDZZMLEddO9DsgyjHLn6t0A+bNzmzl8RWx/w6I4DIM16WCc35Wq6q++5GUQIO6K0RwGYLRHczA/vTsoHgN9pOLHuJ2fF4sFl6lG9R2O7rOK+33lhQPA3AAXbC16CPjCxgv9BAPge/7aaWsVhRFrutOJpPTKQzD3W73+QTiaABxMRdsbIpCNAZAD3H97NS8GeIQgouWEGGzqDOOLSBCr3zgECdgY3fg+mWIzYPTvwpicH8ZYjwdOMSTLcTKidb04lYQnXhphngbBMSL7aG5phu3gwhDQH8QkTR2sSXEBopD8J+t20S9bCE6rikJ7w+iU9hCdE4GF+YPYguI/kIPcTEAiLbGtkEtIJ4NEAcQDXNB2QWidZsI0820Og8gBbmC2CV51b4kJgaITTH1n6IIrDSWS2RrvLWAuNJD1P35n6aszouV5eo26tQdYqeK8D9Rqq1PLs0eeaLuEDsZB/8T+dqW3QV7u3zW7hDtHab/r3ytjeECoEtzV9W9Y7m3uNmnin3/O/opX+sywDloS5vGqoWdaIC4rPZlLpZkbaVke8B9FsQjC3bFsiw3y+LIYnbkOKFERGQr/5nTZEc+6cwvehjj5s91Ab16Ip8Nnu7G9qzaRyNlhXgOjeaeTJHdBz02Eg6YnupO36eNBvfz+Fe8cV998fR3haXpL3Z0J3ty/3bVQIzAYqYdU5HV3e2DPdiMfNmLcd8Psn3CfRZEMyp3Mo3VLoZFBH/jk0oTcide9cUco6ulIOACzKyY+ou9JmAdAc+92yQFd4cI8xQpRHATzrGHqCun9+RViCxWMlPJEHH2S9VpagLWFcQoW1jYOQX4sAAIlRpiYfB8BpGrn04LiNqd49dLIi3WI7kcPegxXIg62ABNwBpChLX/6ZB0Ae5fn1rJHnk00kM8ihCFjBZbiDvtvvB1iGyAMpceg+JdcRuDi26GE6zOjjN9PleiAKZMB2W+tOHALxEiLD9tIepbCphw+SrEiG6W0jZDeghPN17Wj6GFmJZPrbgCzA1wZIgT/WH1T8hD5O/uOcS69uvTA2AtehWif6QfRQOQ5h7N+Xpe9TaaeZ8IIrR0nkwKtYd40h9Wt8gCRM5a0EKcPj6o1rBTjDdk1+KRxbH7udwCXN3sIW7X/GWDlDY+QoJ+Sq4ndQXargFDhPlKzXaOPcRQf1g9mC1A5Eq/FqJiTAT0TNL4RB+4ObeHuJCCSdR0PfMPwsq8eBdr3WSICI9kJkuwaozZ2kPUN/7IEhMhgrwRomJMpGQPV2uCz/rvt4AodcNs3RC+y6CVXwqbPHSGDIHoZE8cF3uIhrymOWxzJIj0gewg0udVbYnXISa0jeDwTOaGP/WpC0ZRiPDZm+I59hD1HQOoF5aQINb+tHBOI8SM7FEs4w4QuZrDPBNq0suR5BycVTYMYjAD44ZREHuIhf6weq0cGSL5oe0gJvQ0xTjtADGmz0VbieSmbMLaga3a6jGIMHAwMzeL9hAVUEh1CF3Zhx/JDmJc0vNKqdehEGetIXLFjpzL+kb54NN+r7rIGZcic5qD3ICwNrbtIAYb/WF1eIVCpDhQZ6eFGAYJU30Y39wuhXAaK4k+OyfVQsy4q9b3zrwD8rPdyQal3XBHmlkBPEQ8j6UjRFNMdiZAdKlXNTFCvHlUNzT5QLz2ZccwUohzjxO5Yx7ints/Qg48vStsvrhbepsyhmirCXkJEP2NeYDfGmJqCuIIEBPanI8DE0ReuLmWvKHzJ2n3KUStjB4LMkiYe4CehWaf35VwdfV0ahhHgOhEczG4wmlqC5H9jKLqC1OIvkNHYo42EMmUdtl+WoU9QHTok+X1V0/8yitYaWyYTPRUcuO4lTVEk9f3JUGkwZ7rpAVEZyfHiA5Jd4g0llMPprHiruGw0fjHEsTKcfH0Iy7WEE0Oy06CyAJ2mzYQ4YpSomqjphvEiJg0dXyukPYKmmn8Pgmi49/k4Y+2EI/6o+YTGaJDaXy2gVgZINKYbOl3hchiNut6bh7SSJfGtgZTpduQISqLXrWGWOiPukUKRFrxvdS2Y0Hyd2K7O+0MkTnQXFVS/SIHNnjq4KgCET6DLp5jCzEwWDjIxhUgMlx3Wnx5iOWSqZBM3PDCX3zHIHrcSXe6kYM4v3MH5OR61G4NHWpdaM29k2ZASoVYmfkzTeqRLURffxD2BkSICS1QtIIKxnYcUClVKAi5Ub9lzIzthJ1jMLZ1l6XFr6ADVDf5T9aKNLOOK4gy8InOKG+AKD6faUVaFGoQIWp68ka3T8JYsNP8Lm4fFM04WNAymWv/aqoZedZA1M93ti2Jpgl+qE+TIDqFfFgLiDBkQuR2CEAgKS2xIbG3oqNU8wyMrCEa8IgQTfOikfkpQ/Rlq68ZopgkwllTp6QrRKUZ0hspcJRFsaTTniEGF8NR6JIyRMWqbIQYjD0hRspOnnQuiY48o86Upv9Qzce+IaambA1koigQWcDEAiJ0LAru3lg2RNodotQ+G7Mpc3VXDxCFjuV01R90RreuQkzFCt00UIX9igLHwGKu+U1eH6iiYsFKKGM2wwnM5U1tINr0zqZ+BcdDVIiSh9M0ZFqQHbNjGO6O3FzMTWwPcbT+4C7LERVma5+N2UnRHsg/Q98l0dSvYIdTA9ERgrgNg/empAAArZFXB+85Ryjh3SBTMKvC4ylVpG+IhrA2uSkdRMGyNKeRxKYuC4Bt2gdEIeHMPNoUr5S1z3qGGBiOIWaBDqJQoY0QP005AaA2i/uA6DL/22Df4GeQu+eeIZqqHEkB00Lkk1jNJTExDICBOqzSB0SuGjUlyX1UrqUM8donRFOT6KVNEDn0TVlhYandU5eaXiBSK4fPplMUCnG5fiDu+bs2NYnjuAki1xo1ptYluZoOjs3vXiDSySN5E0RXSX73e4VonDBOMjSoaS1CjOmBTxLf451Yqcsdrlk0TUdIfKeNXPVFf2timcKts2ZoWeQj1fYWEA3iIRqXFyL9WeJjSVen26uLBb5OxC+KE/dzetmU5eZ+2PnMWyLHCc0VPZv/LEi8jVhzDUXxTDaA/H2fEI1t/6CW8nzIk8P8vbJ+i379RBuIiWmuyLDeWXUCW3FDrxCNrwhryPH5iZJDPP68R4jGdesG9n6bhRRS7BNibGwSh7QurwPtB9Gj6ROiae4FS7Gmcx8jLggZaCdEciJnJ/U31nWSuY/SJEa6PZKmYkrf/cnusV7np/YLR+XS/Ps+IT5Mh9CU8g8wqrVdbKYncl6ENyJdx9eRqD352Xd7+I16/8G5OvI6qozMavOc2YfBAm73nHg8hztYzSvhd/ISs+RBLOvtsu0bjNyt+Ia5PiEaZpdyydCCHT3aEYiC1KQyMoiO9tCQaIBsAWyps3S2YIsOi7GtQAsN8lkQRDGcsWlXGv1SnBLkX3uDaH59Jy08kjNyT6wgTsXrkwb2KUR8Jdp+cRBl1/L6dLVdQYU4h6BHiMbazBaTlT26ejKcBFG1NWfiHZCCaQuRUmcQNflCrdyBHRjzXo1/VZY8fhFiYgyalrRCIYhXNg4D52ojiDTDdVX/i6LMV7iY8hYVJZZnRDL1bSGSVHUKkdbl8eayQr1h2codSMXXbvqjviCaazPLRUMQv9zTF3nAKYE4i7Cy+h9kchYp/IJ+AzYE8mgJkQRRCUQf/xy3sLpyfIJjNcpE3ScSG0V/u5eNuBchFkaI7FdCEOtpesQwDzFEKZa845++FjcqiGFZQ8R3QCDidmdDCt+6/VpwX0KCXW8QE8MsZ8Dnm665R8IUN5YQ+YKO7rgFRDQrGEOM8YAUrcDxsrWp6I7493glfUE0L7K9ZBfhIeIo+H6SWUFEfx9tRoHXFhDR1FAEMcXx67wdNlGVkcOd3x0iGh4IzCvycmNjAkQ8ySy3gpjVMdWxX4fO62mClhBRv7GHZ2CI6CY6LkS45ieIJ7d+IE6MLp/H1RUBIjaeC8nEQbVMhnjEvwcq8HVXZQdxhUxCmB6JIPoouo4NPZaq2G4lsxO/ylBfEA2zIoH49gsRIrrkRYKYaSHWBbEqgSjrZG4P8Zwi9y6nbeKGu3RYbojKvA3ExAPs+J4gmpZxAWIYTISIwJc2EJFlBwPKKFK0awERz/XIEMR9VHK3xSelmZMedDpw/XNPEBve3cC3PSJE9G1jA7Gov8I7RcOrMMprCTHDTcGMQEQl8aMjxKr9orZlVSy7QgzMC9VVKvmLiBDR08wsIGZ1i1tPYMPrQEQtIOLICJ65kSLPqugI0bmwHrMfiA0pHkKYSYSIDjii3nlJooexBiIyj7d124XQHdpARPPoF6jJ8dGTbOqm+lRPJTi/AvETrEhf1AtEc0hbsiQEiLgJCC1MHDUosQ1aQBRTlfDf5SIOqHFuOYZRNbWEXA8QY2i/mySy4SHigf6F/xyirqDnbSDydneG5++ztY0S1NW0dFviJY2H9QKx4TUs4sU5iCQveW3h9un+9jJuAZH/GTJyOVp9kQPqtV3UMgR7EiXvAWJm3CWG3VgAIolIRG+RPIeov34UixDpqTqITsFBJCl009quJ1PiWo9IBgsSyukOcR83FERpOSN05GV6oUmpIQmFjQ9IRahARN3KEr5MDCpELfDBESB6BT7/y9FBZCsuZayJPB+OxzWuEc35N1rtyHhVsugKce6aDW0580HBDX9KycRZyxADdH3WZKETvGzBQ6S6ayGyCp3pX73Tbnygln8GOYLYuSRujcMC6vuxZYg5Y0LFW8Fr7vG5y6AuCefZyRCXeogOCbzD76pd+9Lbk494cngP1dkw6QIA9aWfIsQ72v0MIio2vBWHgty4TbCFmI0YRGFeYCWv7aApUmXl1Cd2r84NmsmREQ7iaBPivU+qM+5W+N8j4ic3q9V5j7fXMD1qqH5yEKs/wJI+t9NXV5suUHjlrRCV7JETWf3zK2RGuH8UFgZFRnBUf4YNlVvv5lZvgQS446taJZwfOmjFUSfO4X85A4S20+/huvSu3uqQv4qwHjyDRfGdEP/3S7wHiZ90e6vEsR5KfCfEAbwd7Zn8G2ysg/dBVBecGKA+4EjhGyG+YHn9PPll5UEH53dB1K7lMTxNKjc2fhfEIbzN2UpTcI7Gb4KY/4P7/1+o8noLZWZLPxCNU7OHJ+gXKCus9QLxNT/qZ2r6Joi/wrwhqoC9A6L3eyoz1Emted0hzgc25eKpjm+AuP5NlbnWuneIl3a5QUOQL+eYdYV4G8AriDurI0Qlt+dXqiPEltkYA1U3iLbvVBu4OkGcDeAlzn2oC8T7rzNuDOoAcTmoZQq66HWIl9/l7TXpZYgvD98OUK9CLH6fo2LWixA1b1b8xXoJ4vY3RWEt9ArEZbdJXsNTBVGDpBHi4a85lJSOQakOvDdAvAxqJbCe9ABgfpDNFTPEx59lo9MEZkWvxdF3E8TiL3poUABXHr0deD56iMvTn7PcoBxmkh5CWlW1c0n+4q9P5O8ucwDK9QQ5xArERTH565OfK5gUkFb5cQoUiOXXn2Voq/R4h/MdvPuRW575Vq5/S8pXT0rcfMYn689nn+6fTfOK3ONs5c29VQXwrzfuID+aRL+5BP4Hj28/ZLSUrXoAAAAASUVORK5CYII="
              alt="My Website Logo"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk7-2auypPL2sW_QVPiOdIi_DqTD3OL6emGw&usqp=CAU"
              alt=""
            />
          </Link>
        </div>
        <nav>
          <Link to="/marcet">Магазин</Link>
          <Link to="/contacts">Контакти</Link>
        </nav>
        <form action="/search" method="GET" className="search-box">
      <input type="text" name="query" placeholder="Търсене на продукти..." />
      <input type="submit" value="Търсене" />
      <Link to={"/cart"} type="button" className="cart-button" style={{ 
          position: "relative",
          marginLeft: "8px",
          backgroundColor: "white",
          color: "#555",
          border: "none",
          padding: "8px",
          cursor: "pointer",
        }}
      >
        <FaShoppingCart style={{ fontSize: "1.2em" }} />
        {cartCount > 0 && (
          <span
            style={{
              position: "absolute",
              top: "-11px",
              right: "-11px",
              color: "#555",
              borderRadius: "50%",
              padding: "2px -5px",
              fontSize: "0.8em",
              fontWeight: "bold",
            }}
          >
            {cartCount}
          </span>
        )}
      </Link>
    </form>
      </header>
      
        
    )
}