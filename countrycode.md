
This document lists some common cases of regions of the world with different
country codes than their ISO 3116-1 alpha-2 code. Usually these are cases of [dependent territories](https://en.wikipedia.org/wiki/Dependent_territory) or disputed territories.

We aggregate many different geocoders ([see full list](https://opencagedata.com/credits)) and
some may treat these territories as a different country than you expect.
As a result, when forward geocoding for results in these territories we recommend you
specify a comma separated list for the `countrycode` parameter.

As an example, when trying to restrict results to the island of Aruba, which is a
a constituent country of the [Kingdom of the Netherlands](https://en.wikipedia.org/wiki/Kingdom_of_the_Netherlands), and has the ISO code `AW`, rather than specifying

`countrycode=aw`

we recommend you instead use

`countrycode=nl,aw`

Please see the
[OpenCage geocoding API documentation](https://opencagedata.com/api#forward-opt) for details.

Here is a full list:

| **"country"**         | **countrycodes**                                  |
| ----------------------|---------------------------------------------------|
| Australia (`au`)      | `au,cc,cx,hm,nf`                                  |
| China (`cn`)          | `cn,hk,mo`                                        |
| Denmark (`dk`)        | `dk,fo,gl`                                        |
| Finland (`fi`)       | `fi,ax`                                           |
| France (`fr`)         | `fr,bl,gf,gp,mf,mq,nc,pf,pm,re,tf,wf,yt`          |
| Morocco (`ma`)        | `ma,eh`                                           |
| Netherlands (`nl`)    | `nl,aw,bq,cw,sx`                                  |
| New Zealand (`nz`)    | `nz,ck,nu,tk`                                     |
| Norway (`no`)         | `no,bv,sj`                                        |
| United Kingdom (`gb`) | `gb,ai,bm,fk,gi,gg,gs,im,io,je,ky,ms,pn,sh,tc,vg` |
| United States (`us`)  | `us,as,gu,pr,um,vi`                               |

_**Please note,** this is purely technical advice to help with geocoding and not intended as political commentary on which territories are or are not, or should or should not, be independent countries_.
