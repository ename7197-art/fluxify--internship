# Ibisobanuro bya Props na State muri React

Muri uyu mushinga wa Day 2, twakoresheje uburyo bubiri bw'ingenzi bwo gucunga amakuru muri React:

### 1. State
**State** ni "muhurwa" (memory) ya component. Irimo amakuru ashobora guhinduka bitewe n'ibyo umukoresha akoze.
* **Urugero muri Counter:** Twakoresheje `useState` kugira ngo tubike umubare ugezweho (count). Iyo ukanze buto, `count` irahinduka kandi React ikongera kwerekana (re-render) component.

### 2. Props
**Props** (Properties) ni amakuru ava muri component nkuru (Parent) ajya muri component nto (Child). Props ntizihindurwa n'iyazakiriye (zi-read-only).
* **Urugero:** Muri Shopping Cart, dushobora guhereza amazina y'ibicuruzwa dukoresheje Props kugira ngo tubyereke neza muri buri `ItemCard`.

### Itandukaniro ry'ingenzi:
| Ikiranga | State | Props |
| :--- | :--- | :--- |
| Inkomoko | Imbere muri component | Ituruka hanze (Parent) |
| Guhinduka | Irahinduka (Mutable) | Ntihinduka (Immutable) |
| Intego | Gucunga ibiba mu gihe gito | Guhererekanya amakuru |